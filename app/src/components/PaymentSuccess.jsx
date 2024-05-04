import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = (order) => {
  const { orderId } = useParams();

  useEffect(async () => {
    await axios.post("");
  }, [third]);

  return (
    <div>
      <h1>Order Successfull</h1>
      <p>`ID : ${orderId}`</p>
    </div>
  );
};

export default PaymentSuccess;
