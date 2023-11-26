import React, { useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/logos";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img className="" src={BG_IMG} alt="logo" />
      </div>
      <form
        className="absolute text-white bg-black my-28 mx-auto p-16 py-12 right-0 left-0 w-[30%] rounded-lg bg-opacity-[0.85]"
        action=""
      >
        <h1 className="text-3xl py-3 my-2 font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full py-3.5 my-2 px-4 bg-neutral-800  rounded-md placeholder:text-neutral-400"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-full py-3.5 my-2 px-4 bg-neutral-800  rounded-md placeholder:text-neutral-400"
          type="email"
          placeholder="Email or phone number"
        />
        <input
          className="w-full py-3.5 my-2 px-4 bg-neutral-800 rounded-md placeholder:text-neutral-400"
          type="password"
          placeholder="Create Password"
        />
        {!isSignInForm && (
          <input
            className="w-full py-3.5 my-2 px-4 bg-neutral-800 rounded-md placeholder:text-neutral-400"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <button
          className="w-full bg-red-700 font-semibold text-lg py-3.5 my-8 px-4 rounded-md"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="my-8">
          <p className="text-neutral-500">
            {isSignInForm ? "New to Netflix? " : "Already have an account? "}
            <span
              className="cursor-pointer text-white hover:underline"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              {isSignInForm ? "Sign up now." : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
