import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMG, USER_AVATAR } from "../utils/logos";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitBtn = () => {
    // validating the form data
    const errorMessage = validateData(
      email.current.value,
      password.current.value
    );
    // console.log(name, email, password);

    setError(errorMessage);

    if (errorMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setError(error.message);
            });

          //   dispatch(addUser(user));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white bg-black my-[40%] md:my-28 mx-auto p-8 md:p-16 md:py-12 right-0 left-0 md:w-[30%] rounded-lg bg-opacity-[0.85] w-11/12"
        action=""
      >
        <h1 className="text-3xl py-3 my-2 font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full py-3.5 my-2 px-4 bg-neutral-800  rounded-md placeholder:text-neutral-400"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full py-3.5 my-2 px-4 bg-neutral-800  rounded-md placeholder:text-neutral-400"
          type="email"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="w-full py-3.5 my-2 px-4 bg-neutral-800 rounded-md placeholder:text-neutral-400"
          type="password"
          placeholder="Password"
        />
        {!isSignInForm && (
          <input
            className="w-full py-3.5 my-2 px-4 bg-neutral-800 rounded-md placeholder:text-neutral-400"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <p className="text-sm font-semibold text-red-600 px-2 pt-2 mt-2">
          {error}
        </p>

        <button
          className="w-full bg-red-600 font-semibold text-lg py-3.5 my-6 px-4 rounded-md"
          type="submit"
          onClick={handleSubmitBtn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="my-6 px-2">
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
