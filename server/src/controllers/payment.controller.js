import { instance } from "../index.js";
import crypto from "crypto";
import { payment } from "../models/payment.model.js";

const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.log("ERROR :", error);
  }
};

const razorpayKey = (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
};

const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const encryptedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const authenticated = encryptedSignature === razorpay_signature;

    if (authenticated) {
      await payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      res.redirect(
        `http://localhost:5173/paymentSuccess/orderId=${razorpay_order_id}`
      );
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log("ERROR :", error);
  }
};

export { checkout, razorpayKey, paymentVerification };
