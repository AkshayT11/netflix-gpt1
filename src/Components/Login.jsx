import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
   
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      {/* Login Form */}

      <form className="absolute p-12 w-3/12  bg-black my-36 mx-auto left-0 right-0 text-white opacity-90">
        <h1 className="text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-2 my-2 w-full bg-gray-800 rounded-md"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-800 rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 rounded-md"
        />
        <button className="px-4 py-4 my-2 bg-red-700 text-white rounded-md w-full">
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignInForm} className="py-2 cursor-pointer font-semibold">
          { isSignInForm ?  "New to Netflix? Sign Up Now" : "Already Registerd? Sign In Now "  }
        </p>
      </form>
    </div>
  );
};

export default Login;
