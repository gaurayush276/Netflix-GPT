import React, { useEffect } from 'react'; 
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from "../utils/firebase";
import { addUser ,removeUser} from '../utils/userSlice';
function Body() {
const dispatch = useDispatch() ;  
 
    const appRouter = createBrowserRouter([
        {
            path:'/' ,
            element:<Login/> 
        }
        ,{
            path:'/browse' ,
            element: <Browse/>
        }
    ]) ;

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid ,email, displayName} = user;
          dispatch(addUser({uid : uid , email:email ,
          displayName : displayName }))  ; 
          console.log(user.uid , user.email) ;
        } else {
          // User is signed out
          
          dispatch(removeUser()) ;  
        }
      });
    }, [ ])
    

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
