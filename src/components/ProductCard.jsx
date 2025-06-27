import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
 const navigate = useNavigate();
  if (!product) return null;

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-40 max-w-50 w-full"
    >
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <div className="text-gray-500/60 text-sm">
      <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-primary">
            <span className="text-zinc-900 md:text-lg text-md ">
              {"$"}{product.price}
            </span>
          </p>
        </div>
        
        <p className="text-gray-500 font-medium text-sm  w-full">{product.name}</p>

        
      </div>
    </div>
  );
};

export default ProductCard;
