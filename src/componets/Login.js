import React  from "react";
import Header from "./Header";
import { useState ,useRef} from "react";
import { checkValidData } from "../utils/validation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// toggle means if the form is a sign up form or sign up form 


function Login() {

  const navigate = useNavigate() ;
  let [toggle, settoggle] = useState(true);

  let [checkError, setcheckError] = useState(null);

  const toggleForm = () => {
    settoggle(!toggle);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleButton = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);

    setcheckError(message);
    console.log(message);

    if(message)
    return ; 
//  if  the page is a sign up page 
    if (!toggle) {
         
      createUserWithEmailAndPassword(auth,
         email.current.value,
          password .current.value)
        .then((userCredential) => {
        
          const user = userCredential.user;
          console.log(user) ;
          navigate("/browse") ; 
        })
        .catch((error) => {
          console.error("Firebase authentication error:", error);
          setcheckError(error.message); // Set the specific error message returned by Firebase
        });

    }
    
    else {

    // sign in login 
       signInWithEmailAndPassword(auth,
        email.current.value,
         password .current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("for sign in") ; 
          console.log(user) ;
          navigate("/browse") ; 
          // ...
        })
        .catch((error) => {
          
          setcheckError( error.message ) ; 
        }); 
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-opacity-80  bg-black w-2/6 left-1/3 top-1/4  text-white rounded-lg"
      >
        <h1 className="text-white font-bold text-2xl m-3">
          {toggle ? "Sign In" : "Sign Up"}
        </h1>

        {!toggle && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 w-full bg-gray-700 rounded-md "
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-3 w-full bg-gray-700 rounded-md "
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 m-3 w-full bg-gray-700 rounded-md"
          ref={password}
        />

        <button
          onClick={handleButton}
          className="  bg-red-800 text-white p-2 m-2 w-full rounded-md border-none  "
        >
          {toggle ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-red-500 font-semibold pl-5">{checkError}</p>

        <p className="m-4 p-2 cursor-pointer" onClick={toggleForm}>
          {" "}
          {toggle
            ? "New to NetFlix ? Sign UP Now"
            : "Already  Registered ? Sign In."}
        </p>
      </form>
    </div>
  );
}

export default Login;
