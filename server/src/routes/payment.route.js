import express from "express";
import {
  checkout,
  razorpayKey,
  paymentVerification,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/razorpaykey").post(razorpayKey);

router.route("/paymentverification").post(paymentVerification);

export default router;
