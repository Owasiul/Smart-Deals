import {
  ArrowLeft,
  ChartPie,
  Clock,
  MapPin,
  Package,
  Phone,
} from "lucide-react";
import React, { use, useRef } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const DetailsInfo = ({ details, bids, setBids }) => {
  const {
    title,
    price_min,
    price_max,
    image,
    _id,
    created_at,
    location,
    seller_name,
    condition,
    usage,
    description,
    seller_contact,
    category,
  } = details;
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);
  const handleBidModal = () => {
    bidModalRef.current.showModal();
  };
  const handleBidSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const newBid = {
      productId: _id,
      buyer_name: name,
      buyer_email: email,
      bid_price: Number(price),
      status: "pending",
    };
    fetch("https://smart-deals-server-pi.vercel.app/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after placing biding data: ", data);
        if (data.insertedId) {
          bidModalRef.current.close();
          // add bid to the table
          newBid._id == data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => a.bid_price - b.bid_price);
          setBids(newBids);
          toast.success("Your Bid is placed successfully");
        }
      });
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="">
        {/* Back Button - Desktop */}
        <Link
          to="/allproducts"
          className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left Column - Image & Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Back Button - Mobile */}
            <button className="lg:hidden flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Products</span>
            </button>

            {/* Product Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Product Description Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-violet-600" />
                Product Description
              </h2>

              <div className="grid grid-cols-2 gap-4 p-4 bg-linear-to-r from-violet-50 to-purple-50 rounded-xl">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">
                    Condition
                  </p>
                  <p className="text-sm font-bold text-gray-900">{condition}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">
                    Usage Time
                  </p>
                  <p className="text-sm font-bold text-gray-900">{usage}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title & Category */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h1>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm">
                {category}
              </span>
            </div>

            {/* Price Card */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg p-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-green-700">
                  ${price_min}
                </span>
                <span className="text-2xl font-semibold text-green-600">
                  - ${price_max}
                </span>
              </div>
              <p className="text-sm text-green-700 font-medium mt-1">
                Price range for negotiation
              </p>
            </div>

            {/* Product Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h2 className="text-lg font-bold text-gray-900">
                Product Details
              </h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-semibold text-gray-500">
                    Product ID
                  </span>
                  <span className="text-sm font-mono text-gray-900">{_id}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Posted
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {created_at}
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Information Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
              <h2 className="text-lg font-bold text-gray-900">
                Seller Information
              </h2>

              {/* Seller Profile */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  {seller_name}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg">
                    {seller_name}
                  </p>
                  <p className="text-sm text-gray-500">Verified Seller</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Contact
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {seller_contact}
                    </p>
                  </div>
                </div>
                {/* status */}
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <ChartPie className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                  <div className="flex items-center space-x-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Status
                    </p>
                    <p className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                      On Sale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              {/* Action Button */}
              <button
                onClick={handleBidModal}
                className="w-full bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                I Want to Buy This Product
              </button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog ref={bidModalRef} className="modal">
                <div className="modal-box p-8 space-y-3">
                  <h3 className="font-bold text-lg text-center mb-3">
                    Give Seller Your Offered Price
                  </h3>
                  <form onSubmit={handleBidSubmit}>
                    <div className="bids">
                      <div className="flex flex-row-items-center justify-between space-x-4">
                        {/* name */}
                        <div className="name flex flex-col justify-center items-start">
                          <label className="text-[14px] font-medium">
                            Buyer Name
                          </label>
                          <input
                            className="w-52 h-8 py-4 pl-2 pr-8 my-1 border rounded-sm"
                            placeholder="Your Name"
                            defaultValue={user?.displayName}
                            type="text"
                            name="name"
                          />
                        </div>
                        {/* email */}
                        <div className="email flex flex-col justify-center items-start">
                          <label className="text-[14px] font-medium">
                            Buyer Email
                          </label>
                          <input
                            className="w-52 h-8 py-4 pl-2 pr-8 my-1  border rounded-sm"
                            placeholder="Your Email"
                            type="email"
                            defaultValue={user?.email}
                            name="email"
                          />
                        </div>
                      </div>
                      {/* Buyer image url */}
                      <div className="iamge flex flex-col justify-center items-start">
                        <label className="text-[14px] font-medium">
                          Buyer Image URL
                        </label>
                        <input
                          className="w-full h-8 py-4 pl-2 pr-8 my-1  border rounded-sm"
                          placeholder="https:www.example.image"
                          type="text"
                          name="imgUrl"
                        />
                      </div>
                      {/* Place your price */}
                      <div className="price flex flex-col justify-center items-start">
                        <label className="text-[14px] font-medium">
                          Place your price
                        </label>
                        <input
                          className="w-full h-8 py-4 pl-2 pr-8 my-1  border rounded-sm"
                          placeholder={`Biding price should be between ${price_min} to ${price_max}$`}
                          type="number"
                          name="price"
                        />
                      </div>
                      {/* Contact info*/}
                      <div className="contact flex flex-col justify-center items-start">
                        <label className="text-[14px] font-medium">
                          Contact Info
                        </label>
                        <input
                          className="w-full h-8 py-4 pl-2 pr-8 my-1  border rounded-sm"
                          placeholder="e.g. +1-555-1234"
                          type="number"
                          name="contact"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-end mt-3">
                      <button
                        type="button"
                        onClick={() => bidModalRef.current.close()}
                        className="btn rounded-lg border border-indigo-700 text-indigo-600 bg-transparent font-semibold"
                      >
                        cancel
                      </button>
                      <button
                        type="submit"
                        className="btn bg-linear-to-r from-violet-700 to-purple-500  rounded-lg text-white "
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      {/* bids  for the product */}
      <div className="bidsforproduct my-10">
        <div className="header">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Bids For This Products:{" "}
            <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              {bids.length}
            </span>
          </h2>
        </div>
        {/* table of bid */}
        <div className="overflow-x-auto rounded-lg border border-base-300 mt-6">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th className="text-sm font-semibold">SL No</th>
                <th className="text-sm font-semibold">Product</th>
                <th className="text-sm font-semibold">Buyer</th>
                <th className="text-sm font-semibold">Bid Price</th>
                <th className="text-sm font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {bids.map((bid, idx) => (
                <tr key={bid._id} className="hover">
                  {/* SL NO */}
                  <td className="text-sm">{idx + 1}</td>

                  {/* PRODUCT COLUMN */}
                  <td>
                    <div className="flex items-center gap-3">
                      {/* Product Image */}
                      <div className="w-12 h-12">
                        <img className="rounded-md" src={image} alt="" />
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-col justify-center">
                        <span className="font-medium text-sm">{title}</span>
                        <span className="text-xs text-gray-500">
                          ${price_min} to {price_max}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* SELLER COLUMN */}
                  <td>
                    <div className="flex items-center gap-3">
                      {/* Seller Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gray-200"></div>

                      <div className="flex flex-col">
                        <span className="font-medium text-sm">
                          {bid.buyer_name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {bid.buyer_email}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* BID PRICE */}
                  <td className="font-semibold text-sm">${bid.bid_price}</td>

                  {/* ACTION BUTTONS */}
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-xs bg-green-600 text-white border-none hover:bg-green-700">
                        Accept Offer
                      </button>
                      <button className="btn btn-xs bg-red-500 text-white border-none hover:bg-red-600">
                        Reject Offer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
