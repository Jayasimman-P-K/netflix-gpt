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
  const userStore = useSelector((store) => store.user);
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
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {userStore && (
        <div className="flex p-2 py-1 items-center -mr-3 -mt-1">
          <button
            onClick={handleToggleGpt}
            className="bg-red-600 text-white font-semibold text-lg mx-4 p-1.5 px-8 rounded-lg hover:scale-95"
          >
            {isShowGptPage ? "Home" : "Chat GPT"}
          </button>
          <img className="w-12 h-12 p-1" src={USER_AVATAR} alt="" />
          <p
            className="px-2 text-white font-semibold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
