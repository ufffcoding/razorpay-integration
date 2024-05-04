import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import Razorpay from "razorpay";

dotenv.config({
  path: "./env",
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on PORT: ${process.env.PORT}`);
    })
  )
  .catch((Error) => {
    console.log("MongoDB Connection Failed Error: ", Error);
  });
