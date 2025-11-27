import React from "react";
import { Link } from "react-router";

const ProductsCard = ({ product }) => {
  const { title, price_min, price_max, image, _id } = product;
  return (
    <div className="md:w-96 w-full h-full p-4 mx-auto">
      <div className="card bg-base-100 shadow-md hover:shadow-lg transition rounded-2xl border border-base-300 h-full">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full object-cover h-48"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold text-neutral-500 ">
            {title}
          </h2>

          <p className="text-sm text-violet-600 font-semibold">
            Price Range: ${price_min} - ${price_max}
          </p>

          <div className="card-actions justify-start mt-3">
            <Link
              to={`/productdetails/${_id}`}
              className="btn border-purple-600 text-purple-600 text-center w-full rounded-lg px-4 py-2 flex items-center gap-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
