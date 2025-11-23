import React, { Suspense, use } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import Loading from "../Loading/Loading";
const LatestProducts = ({ latestProductsPromise }) => {
  const productsData = use(latestProductsPromise);
  //   console.log(productsData);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-3">
        <h1 className="text-5xl text-center">
          Recent{" "}
          <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent font-bold">
            Products
          </span>
        </h1>
      </div>
      <div className="container grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto mt-3">
        <Suspense fallback={<Loading></Loading>}>
          {productsData.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </Suspense>
      </div>
      <button className="btn shadow-lg rounded-sm my-5 lg:px-3 lg:py-4 px-2 py-3 w-[145px]  bg-linear-to-r from-violet-700 to-purple-500 text-white">Show All</button>
    </div>
  );
};

export default LatestProducts;
