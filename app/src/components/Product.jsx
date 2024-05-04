import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(...products.filter((i) => i.productId === productId));
  }, []);

  const buyNowHandler = async (amount) => {
    const {
      data: { order },
    } = await axios.post("http://localhost:8000/api/v1/payment/checkout", {
      amount,
    });

    const {
      data: { key },
    } = await axios.post("http://localhost:8000/api/v1/payment/razorpaykey");

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Deepanshu Verma",
      description: "Test Transaction",
      image:
        "https://avatars.githubusercontent.com/u/155479877?s=400&u=c39a292d8db5dd8cc38c2e37469d527ccae63e77&v=4",
      order_id: order.id,
      callback_url: "http://localhost:8000/api/v1/payment/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#44494b",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return product ? (
    <div className="py-8">
      <div className="flex lg:flex gap-2  border rounded-xl p-2">
        <img src={product.image} alt={product.title} className="w-2/4 h-max" />
        <div className="w-2/4 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="w-full mb-6">
              <h1 className="text-4xl uppercase text-black font-bold">
                {product.title}
              </h1>
            </div>
          </div>
          <div className="self-end">
            <button
              className=" bg-black text-white rounded px-1"
              onClick={() => buyNowHandler(product.amount)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Not Found</div>
  );
};

export default Product;
