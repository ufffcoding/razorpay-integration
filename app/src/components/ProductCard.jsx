import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productId, image, title, color, amount }) => {
  return (
    <Link to={`/product/${productId}`}>
      <div className="group relative dark:bg-white rounded-t-md overflow-hidden">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className=" flex justify-between p-2">
          <div>
            <h3 className="text-sm font-bold text-gray-700">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">₹{amount}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
