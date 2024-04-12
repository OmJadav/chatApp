import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-red-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="email">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 p-2 inline-block"
          >
            Don't Have an Account? Register
          </Link>

          <button
            className="btn btn-block btn-sm mt-2 border btn-error border-error"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
