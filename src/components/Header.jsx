import React, { useEffect } from "react";
import { LOGO_URL, USER_AVATAR } from "../utils/logos";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { clearMovieDatas, toggleGptPage } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUser = useSelector((store) => store.user);
  const isShowGptPage = useSelector((store) => store.gpt.showGptPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        // console.log(userStore);
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleToggleGpt = () => {
    dispatch(toggleGptPage());
    dispatch(clearMovieDatas());
  };

  return (
    <div
      className={
        "absolute w-full px-4 md:px-8 py-4 md:py-4 bg-gradient-to-b from-black z-10 flex justify-between "
      }
    >
      <img className={"md:w-44 w-24 "} src={LOGO_URL} alt="logo" />
      {isUser && (
        <div className="flex px-2 md:py-1 items-center justify-between">
          <button
            onClick={handleToggleGpt}
            className="bg-red-600 text-white text-sm font-semibold md:text-lg md:mx-4 mx-2 p-1.5 px-3  md:px-8 rounded-lg hover:scale-95"
          >
            {isShowGptPage ? "Home" : "Chat GPT"}
          </button>
          <div className="flex items-center bg-black rounded p-1 bg-opacity-80">
            <img
              className="md:w-10 w-8 rounded md:p-1 p-0.5"
              src={USER_AVATAR}
              alt=""
            />
            <p
              className="px-2 text-white font-semibold cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
