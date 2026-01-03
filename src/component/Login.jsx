import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [passWord, setpassWord] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        passWord,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="card w-96 bg-neutral text-neutral-content shadow-xl  border-primary">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <form className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral-content">Email</span>
              </label>
              <input
                type="email"
                value={emailId}
                placeholder="Enter your email"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral-content">
                  Password
                </span>
              </label>
              <input
                type="password"
                value={passWord}
                placeholder="Enter your password"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={(e) => {
                  setpassWord(e.target.value);
                }}
              />
            </div>

            {/* Button */}
            <div className="form-control mt-6 flex justify-center">
              <button
                className="btn btn-primary  w-28 mx-auto"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-sm text-center mt-4 opacity-80">
            Don’t have an account?{" "}
            <span className="link link-primary">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
