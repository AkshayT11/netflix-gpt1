import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { BG_URL, USER_AVATAR } from "./utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);


  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form details
    // checkValidData(email, password)

    // checking validate by this function

    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    //Sign in Sign up Logic
    if (!isSignInForm) {
      // sign up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          updateProfile( user, {
            displayName: name.current.value , photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated! 
            const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            udi: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })

        );
            
            // ...
          }).catch((error) => {
            // An error occurred
            setErrMessage(errorCode + " " + errorMessage);
            // ...
          });

          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);

        });
    }
  };

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src= {BG_URL}
          alt="background"
        />
      </div>
      {/* Login Form */}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12  bg-black my-36 mx-auto left-0 right-0 text-white opacity-90"
      >
        <h1 className="text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-800 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-800 rounded-md"
        />
        <input
          type="text"
          ref={password}
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 rounded-md"
        />
        <p className="text-red-500 font-semibold py-2">{errMessage} </p>
        <button
          className="px-4 py-4 my-2 bg-red-700 text-white rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={handleSignInForm}
          className="py-2 cursor-pointer font-semibold"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registerd? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
