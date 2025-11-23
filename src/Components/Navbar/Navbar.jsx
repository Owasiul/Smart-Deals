import React, { use } from "react";
import { Link } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);
  const links = (
    <div className="flex lg:flex-row flex-col lg:items-center gap-5 text-[16px]">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allproducts">All Products</Link>
      </li>
      <li>
        <Link to="/myproducts">My Products</Link>
      </li>
      <li>
        <Link to="/mybids">My Bids</Link>
      </li>
      <li>
        <Link>Create Product</Link>
      </li>
    </div>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-semibold">
            Smart
            <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              Deals
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex flex-row gap-4">
          {user ? (
            <details className="dropdown dropdown-end">
              <summary className="m-1 btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </summary>
              <ul className="menu dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-sm bg-linear-to-r from-violet-700 to-purple-500 text-white"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </details>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn lg:w-28 w-20 px-4 py-2 rounded-md border-violet-500 text-violet-500 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn lg:w-28 w-20 px-4 py-2 rounded-md bg-linear-to-r from-violet-700 to-purple-500 text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
