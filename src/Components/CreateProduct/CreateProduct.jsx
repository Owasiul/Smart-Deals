import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import useAuth from "../../Hooks/UseAuth";
// import useAxios from "../../Hooks/UseAxiosInstance";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const CreateProduct = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const handleCreateProduct = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const category = event.target.category.value;
    const price_min = event.target.minPrice.value;
    const price_max = event.target.maxPrice.value;
    const condition = event.target.condition.value;
    const usage = event.target.usage.value;
    const image = event.target.imageUrl.value;
    const seller_contact = event.target.sellerContact.value;
    const sellerImageUrl = event.target.sellerImageUrl.value;
    const seller_name = event.target.sellerName.value;
    const seller_email = event.target.sellerEmail.value;
    const location = event.target.location.value;
    const description = event.target.description.value;
    const newProduct = {
      title,
      category,
      price_max,
      price_min,
      condition,
      usage,
      image,
      seller_name,
      seller_email,
      seller_contact,
      sellerImageUrl,
      location,
      description,
    };
    AxiosSecure.post("/products", newProduct).then((data) => {
      if (data.data.insertedId) {
        toast.success("Congratulations Your product is added Successfulllt ❤️");
        event.target.reset();
      }
    });
  };
  return (
    <>
      <Navbar></Navbar>
      <main>
        {/* Back Button - Desktop */}
        <Link
          to="/"
          className="flex ml-5 my-3 items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Products</span>
        </Link>
        <div className="header">
          <h1 className="text-center md:text-4xl text-3xl font-bold">
            Create{" "}
            <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              A Product
            </span>
          </h1>
        </div>
        <form className="form" onSubmit={handleCreateProduct}>
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-base-100 rounded-lg shadow-lg p-6 space-y-6">
                {/* Title and Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g. Yamaha Fz Guitar for Sale"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">Category</span>
                    </label>
                    <select
                      name="category"
                      className="select select-bordered w-full"
                    >
                      <option value="">Select a Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="musical-instruments">
                        Musical Instruments
                      </option>
                      <option value="furniture">Furniture</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                      <option value="sports">Sports & Outdoors</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Price Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Min Price You want to Sale ($)
                      </span>
                    </label>
                    <input
                      type="number"
                      name="minPrice"
                      placeholder="e.g. 18.5"
                      step="0.01"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Max Price You want to Sale ($)
                      </span>
                    </label>
                    <input
                      type="number"
                      name="maxPrice"
                      placeholder="Optional (default = Min Price)"
                      step="0.01"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Product Condition and Usage Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Product Condition
                      </span>
                    </label>
                    <div className="flex gap-6 mt-2">
                      <label className="label cursor-pointer gap-2 ">
                        <input
                          type="radio"
                          name="condition"
                          value="brand-new"
                          className="radio radio-primary"
                        />
                        <span className="label-text">Brand New</span>
                      </label>
                      <label className="label cursor-pointer gap-2">
                        <input
                          type="radio"
                          name="condition"
                          value="used"
                          className="radio radio-primary"
                        />
                        <span className="label-text">Used</span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Product Usage time
                      </span>
                    </label>
                    <input
                      type="text"
                      name="usage"
                      placeholder="e.g. 1 year 3 month"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Product Image URL */}
                <div className="w-full">
                  <label className="label mb-1">
                    <span className="label-text font-medium">
                      Your Product Image URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    placeholder="https://..."
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Seller Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Seller Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="sellerName"
                      defaultValue={user.displayName}
                      placeholder="e.g. Artisan Roasters"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Seller Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="sellerEmail"
                      defaultValue={user.email}
                      placeholder="leli31955@nrlord.com"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Seller Contact and Image URL Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Seller Contact
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="sellerContact"
                      placeholder="e.g. +1-555-1234"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label className="label mb-1">
                      <span className="label-text font-medium">
                        Seller Image URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="sellerImageUrl"
                      placeholder="https://..."
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="w-full">
                  <label className="label mb-1">
                    <span className="label-text font-medium">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Description */}
                <div className="w-full">
                  <label className="label mb-1">
                    <span className="label-text font-medium">
                      Simple Description about your Product
                    </span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                    className="textarea textarea-bordered h-32 w-full"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-white"
                  >
                    Create A Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
};

export default CreateProduct;
