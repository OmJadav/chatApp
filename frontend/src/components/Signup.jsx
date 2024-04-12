import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

export default function Signup() {
  const { loading, signUp } = useSignup();
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await signUp(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-red-500">Let's Talk</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="fullname">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter Fullname"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* <GenderCheckBox /> */}
          <div className="flex mt-2">
            <div className="form-control">
              <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Male</span>
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  onChange={(e) =>
                    setInputs({ ...inputs, gender: e.target.value })
                  }
                  className="radio radio-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Female</span>
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  className="radio radio-primary"
                  onChange={(e) =>
                    setInputs({ ...inputs, gender: e.target.value })
                  }
                />
              </label>
            </div>
          </div>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 p-2 inline-block"
          >
            Already Have an Account? Login
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border btn-error border-error"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
