import React from "react";
import bgLeft from "../../assets/bg-hero-left.png";
import bgRight from "../../assets/bg-hero-right.png";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-96 w-full flex bg-linear-to-r from-[#ffe6fd] to-[#e0f8f5]">
      {/* Left background */}
      <div
        className="w-1/2 h-full bg-contain bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${bgLeft})` }}
      ></div>

      {/* Right background */}
      <div
        className="w-1/2 h-full bg-contain bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${bgRight})` }}
      ></div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 lg:px-20 px-5 lg:py-16 py-4">
        <h1 className="lg:text-7xl md:text-4xl text-2xl lg:w-2xl w-full font-bold leading-tight text-center">
          Deal your{" "}
          <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
            Products
          </span>{" "}
          In A{" "}
          <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
            Smart
          </span>{" "}
          way !
        </h1>
        <p className="text-[#627382] text-lg text-center">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        {/* search bar */}
        <div className="search-bar mt-2 flex items-center shadow-lg rounded-full overflow-hidden">
          <input
            className="bg-white text-start flex items-center lg:w-[500px] md:w-96 w-full h-12 p-3 rounded-tl-full rounded-bl-full text-gray-400"
            placeholder="search For Products, Categoriees..."
            type="text"
            name="search"
          />
          <button
            className="h-12 w-[50px] rounded-r-full  bg-linear-to-r from-violet-700 to-purple-500"
            type="submit"
          >
            <Search className="text-white object-contain flex mx-auto"></Search>{" "}
          </button>
        </div>
        {/* products btn */}
        <div className="flex flex-row items-center gap-10 my-3">
          <button className="btn md:px-4 px-3 md:py-3 py-2  bg-linear-to-r from-violet-700 to-purple-500 text-white rounded-sm lg:h-12">Watch all products</button>
          <button className="btn md:px-4 px-3 md:py-3 py-2  border border-purple-600 text-purple-600 rounded-sm lg:h-12">Post an product</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
