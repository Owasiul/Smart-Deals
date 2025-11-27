import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { createUser, googleSignIn, setUser, updateUserData } =
    useContext(AuthContext);
  const naviagte = useNavigate();
  // google signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);

        naviagte("/");
        // sending user to db
        const newUser = {
          name: result.user.displayName || "",
          email: result.user.email || "",
          image: result.user.photoURL || "",
        };
        if (!newUser.email) {
          console.log("user not found ");
          return;
        }
        setUser(result.user);

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after posting the data to db", data);
            naviagte("/");
          });
      })
      .catch((error) => console.log(error));
  };
  //   create user with email & password
  const handleEmalPassSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.image.value;
    createUser(email, password)
      .then((userInfo) => {
        const user = userInfo.user;

        // Wait for updateUserData
        return updateUserData({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          // Now Firebase has updated profile
          const newUser = {
            name: name, // ← direct values (correct)
            email: email,
            image: photo,
          };

          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });
          event.target.reset();
          return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
        });
      })
      .then((res) => res.json())
      .then((data) => console.log("Saved to DB:", data))
      .catch(console.error);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Header */}
            <h2 className="text-3xl font-bold text-center mb-2">
              Register Now!
            </h2>
            <p className="text-center text-sm mb-6">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-purple-600 hover:underline"
              >
                Login Now
              </Link>
            </p>

            <form onSubmit={handleEmalPassSignUp}>
              {/* Name Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email Input */}
              <div className="form-control w-full mt-4">
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

              {/* Image URL Input */}
              <div className="form-control w-full mt-4">
                <label className="label">
                  <span className="label-text font-medium">Image-URL</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Give the user image URL"
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

              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none text-white w-full mt-6"
              >
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-4">OR</div>

            {/* Google Sign Up Button */}
            <button
              className="btn btn-outline w-full flex items-center justify-center gap-2"
              onClick={handleGoogleSignIn}
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
              <span className="font-medium">Sign Up With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
