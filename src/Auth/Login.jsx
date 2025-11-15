import React, { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { googleSignIn, updateUserData, setUser } = use(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn().then((userInfo) => {
      const userInformation = userInfo.user;
      if (userInformation) {
        Navigate("/");
        updateUserData({
          displayName: userInformation.displayName,
          photoURL: userInformation.photoURL,
        });
        setUser(userInformation);
      }
    });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Header */}
            <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
            <p className="text-center text-sm mb-6">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-purple-600 hover:underline"
              >
                Register Now
              </Link>
            </p>

            <form>
              {/* Email Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password Input */}
              <div className="form-control w-full mt-4">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="*************"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-left mt-2">
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none text-white w-full mt-6">
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-4">OR</div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Sign In With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
