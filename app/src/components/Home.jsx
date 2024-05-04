import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";

const Home = () => {
  const productList = [
    {
      productId: "1",
      title: "T-Shirt",
      color: "Black",
      amount: "699",
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      productId: "2",
      title: "Shirt",
      color: "Blue",
      amount: "799",
      image:
        "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      productId: "3",
      title: "Jeans",
      color: "Blue",
      amount: "1199",
      image:
        "https://images.pexels.com/photos/2009824/pexels-photo-2009824.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      productId: "4",
      title: "Jogger",
      color: "Black",
      amount: "999",
      image:
        "https://images.pexels.com/photos/9713297/pexels-photo-9713297.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];



  const products = useSelector((state) => state.product.products);

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Best Seller
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productList?.map((product) => (
            <div key={product.productId}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
