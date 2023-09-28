import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO } from "./utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
     
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // movie it from body 
  useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            udi: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse")

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    });
    // unsubscribe when component is Unmount
      return ()=> unsubscribe();    
    
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center ">
      <img
        className="w-44"
        src= {LOGO}
        alt="Logo"
      />
     { user && <div className="flex p-2">
        <img className="w-12 h-12 mr-3" src={user?.photoURL} alt="usericon" />
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white cursor-pointer py-1 px-3 rounded-md"
        >
          (Sign Out)
        </button>
      </div>}

    </div>
  );
};

export default Header;
