import React from 'react' ; 
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

function Browse() {

   
    const navigate = useNavigate() ; 

      const handleSignOut = ()=>{
      signOut(auth).then(()=>{
        navigate("/") ; 
      })
      .catch((error)=>{
        navigate("/error") ; 
      })
    }
  

  return (
    <div className='w-full'> 
      <div className='flex justify-between w-full'>
      <Header/>
      <button className='w-[4rem] h-[2rem] bg-red-700 absolute right-5 top-8 z-10 rounded-sm text-sm text-white'  onClick={handleSignOut}  > Sign Out </button>
    </div>

    </div>
    
  )
}

export default Browse;
