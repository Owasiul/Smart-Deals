import React from "react";
import { Link } from "react-router";
import ProductDetails from "./ProductDetails";

const AllProductsCard = ({ productsAll }) => {
  const { title, price_min, price_max, image, _id } = productsAll;
  return (
    <div>
      <div className="md:w-96 h-full w-full p-4 mx-auto overflow-hidden">
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition rounded-2xl border border-base-300 h-full">
          <figure className="px-4 pt-4">
            <img
              src={image}
              alt={title}
              className="rounded-xl w-full object-cover h-48"
            />
          </figure>
          <div className="card-body">
            <div className="badge bg-linear-to-r from-[#632ee326] to-[#9f62f226] flex items-center">
              <span className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                on sale
              </span>
            </div>
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
    </div>
  );
};

export default AllProductsCard;
