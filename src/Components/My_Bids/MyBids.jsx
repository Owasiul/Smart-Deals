import React, { use, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Context/AuthContext";
const MyBids = () => {
  const { user } = use(AuthContext);
  const [userBids, setUserBids] = useState([]);
  const handleRemoveBid = (_id) => {
    fetch(`https://smart-deals-server-pi.vercel.app/bids/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          const remaingBids = userBids.filter((bid) => bid._id !== _id);
          setUserBids(remaingBids);
        }
      });
  };
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://smart-deals-server-pi.vercel.app/bids?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUserBids(data);
        });
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <main className="container mx-auto md:py-10 py-5">
        {/* User bids */}
        <div className="header">
          <h2 className="text-center lg:text-5xl md:text-4xl text-2xl font-bold mb-5">
            My Bids:{" "}
            <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              {userBids.length}
            </span>{" "}
          </h2>
        </div>
        {/* user bids */}
        {/* table of bid */}
        <div className="overflow-x-auto rounded-lg border border-base-300 mt-6">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th className="text-sm font-semibold">SL No</th>
                <th className="text-sm font-semibold">Product</th>
                <th className="text-sm font-semibold">Seller</th>
                <th className="text-sm font-semibold">Bid Price</th>
                <th className="text-sm font-semibold">Status</th>
                <th className="text-sm font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {userBids.map((bid, idx) => (
                <tr key={bid._id} className="hover">
                  {/* SL NO */}
                  <td className="text-sm">{idx + 1}</td>

                  {/* PRODUCT COLUMN */}
                  <td>
                    <div className="flex items-center gap-3">
                      {/* Product Image */}
                      <div className="w-12 h-12">
                        <img
                          className="rounded-md"
                          src={bid.product?.image}
                          alt=""
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-col justify-center">
                        <span className="font-medium text-sm">
                          {bid.product?.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          ${bid.product?.price_min} to ${bid.product?.price_max}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* SELLER COLUMN */}
                  <td>
                    <div className="flex items-center gap-3">
                      {/* Seller Avatar */}
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={bid.product?.seller_image} alt="" />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-medium text-sm">
                          {bid.product?.seller_name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {bid.product?.email}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* BID PRICE */}
                  <td className="font-semibold text-sm">${bid.bid_price}</td>

                  {/* BID STATUS */}
                  <td>
                    {bid.status === "pending" ? (
                      <div className="badge px-3 py-1 rounded-full bg-amber-500 font-semibold text-sm text-white">
                        {bid.status}
                      </div>
                    ) : (
                      <div className="badge px-3 py-1 rounded-full bg-green-600 font-semibold text-sm text-white">
                        {bid.status}
                      </div>
                    )}
                  </td>

                  {/* ACTION BUTTONS */}
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRemoveBid(bid._id)}
                        className="btn border-red-500 text-red-400 "
                      >
                        Remove Bid
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MyBids;
