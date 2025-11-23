import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router";
import AllProductsCard from "./AllProductsCard";


const AllProducts = () => {
  const allProducts = useLoaderData();
  //   console.log(allProducts);
  return (
    <div>
      <Navbar></Navbar>
      <main className="container mx-auto w-full overflow-hidden">
        <div className="header my-3">
          <h1 className="text-4xl font-bold text-center">
            All{" "}
            <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <div className="products grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {allProducts.map((productsAll) => (
             <AllProductsCard key={productsAll._id} productsAll={productsAll}></AllProductsCard>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
