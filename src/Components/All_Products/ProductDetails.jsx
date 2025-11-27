/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLoaderData, useParams } from "react-router";
import DetailsInfo from "./DetailsInfo";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [bids, setBids] = useState([]);
  useEffect(() => {
    if (!id) {
      console.log("no id found");
      return;
    }
    fetch(`http://localhost:3000/products/bids/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
        // console.log(`data of prodeucts bid`, data);
      });
  }, [id]);
  useEffect(() => {
    const singleProductDetails = data.find((product) => product._id == id);
    setDetails(singleProductDetails);
  }, [id, data]);
  return (
    <div>
      <Navbar></Navbar>
      <main className="md:p-10 p-4 bg-linear-to-br from-gray-50 to-gray-100">
        {/* product details */}
        <div className="detailsOFproduct">
          {<DetailsInfo details={details} bids={bids} setBids={setBids}></DetailsInfo>}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
