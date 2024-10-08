import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user sign in this  will be called
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
        // ...
      } else {
        //if  User is signed out this will be called
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscibe when component is unmount
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 float flex justify-between">
        <img className="w-44 " src={LOGO} alt="Netflix Logo" />

        {user && (
          <div className="flex p-2">
            <img
              className="w-12 h-12 rounded-lg "
              src={user?.photoURL}
              alt="userIcon"
            />
            <button onClick={handleSignout} className="font-bold text-white">
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
