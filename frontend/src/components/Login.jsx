import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-red-500">ChatApp</span>
        </h1>

        <form>
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

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 p-2 inline-block"
          >
            Don't Have an Account? Register
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border btn-error border-error">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
