import React from "react";
import GenderCheckBox from "./GenderCheckBox";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-red-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2" htmlFor="fullname">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2" htmlFor="email">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2" htmlFor="password">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="confirmPassword">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 p-2 inline-block"
          >
            Already Have an Account? Login
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border btn-error border-error">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
