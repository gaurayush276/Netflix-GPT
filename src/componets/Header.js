import React  , { useEffect }from 'react' ; 
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from "../utils/firebase";
import { addUser ,removeUser} from '../utils/userSlice';
import {   useNavigate } from 'react-router-dom';
import { logo } from '../utils/constants';

function Header() {
 
  const dispatch = useDispatch() ;  
  const navigate = useNavigate() ; 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // user is sigend in 
      if (user) {
        const {uid ,email, displayName} = user;
        dispatch(addUser({uid : uid , email:email ,
        displayName : displayName }))  ; 
        console.log(user.uid , user.email) ;
        navigate("/browse") ; 
      } else {
        // User is signed out
        
        dispatch(removeUser()) ;  
        navigate("/") ; 
      }
    });
        // clean up it when header is unmounted 
    return  unsubscribe ; 
  }, [ ])
  


  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b  from-black z-10 w-full'>
       
      <img className='w-36 m-5' src= {logo} />
     
    </div>
  )
}

export default Header;
