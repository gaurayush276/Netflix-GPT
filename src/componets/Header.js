import React  , { useEffect, useState }from 'react' ; 
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "../utils/firebase";
import { addUser ,removeUser} from '../utils/userSlice';
import {   useNavigate } from 'react-router-dom';
import { languages, logo } from '../utils/constants';
 import { signOut } from 'firebase/auth';
import { showGtpView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
 
function Header() {
 const [show ,setshow] = useState(false) ; 
  const dispatch = useDispatch() ;  
  const navigate = useNavigate() ; 
  // if we are on gpt search page 
  const showGptSearch = useSelector(store => store.gpt.toggle) ; 
  
const handleGptSearch =()=>{
    dispatch(showGtpView()) ; 
}
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // user is sigend in 
      if (user) {
        const {uid ,email, displayName} = user;
        dispatch(addUser({uid : uid , email:email ,
        displayName : displayName }))  ; 
        console.log(user.uid , user.email) ;
        navigate("/browse") ; 
         setshow(true ) ; 
      } else {
        // User is signed out
        
        dispatch(removeUser()) ;  
        navigate("/") ; 
        setshow(false ) ; 
       }
    });
        // clean up it when header is unmounted 
    return  unsubscribe ; 
  }, [ ])

  
 
  
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
      
    })
    .catch((error)=>{
      navigate("/error") ; 
    })
  } 
  

  //  you can use the useref way to do so but i am doing  it in this way 
  const handleLanguage =(e)=> {
    console.log(" change language") ;
    console.log(e.target.value) ;
    dispatch(changeLanguage(e.target.value)) ; 
     
  }

  


  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b justify-between flex  from-black z-10 w-full'>
      <img className='w-36 m-5' src= {logo} />
      {
        show && (<div className='flex gap-2 items-center'>

          {
            showGptSearch && (
            <select className=' italic bg-red-600 text-white rounded p-1'  onChange={handleLanguage}> 
           { languages.map((lang, index)=>(
            <option key={index} value={lang.identifier} >{lang.name}</option>
           ))}
         </select> )
          }
  
        <button className='w-[5rem] h-[2rem] bg-red-600/100   rounded-sm text-sm text-white' onClick={handleGptSearch} > GPTSearch </button>  
       
     
     <button className='w-[4rem] h-[2rem] bg-red-600/100    rounded-sm text-sm text-white'  onClick={handleSignOut}  > Sign Out </button>
     </div> )
      }
      
 
      
    </div>
  )
}

export default Header;
