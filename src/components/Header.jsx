import React, { useEffect } from "react";
import { LOGO_URL, USER_AVATAR } from "../utils/logos";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((store) => store.user);

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

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {userStore && (
        <div className="flex p-2 my-1 items-center">
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
