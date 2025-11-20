import React from "react";
import Hero from "../../Components/Hero/Hero";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";

const latestProductsPromise = fetch('http://localhost:3000/latestproducts').then(res => res.json())
const Home = () => {
  return <div>
    <Hero></Hero>
    <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
  </div>;
};

export default Home;
