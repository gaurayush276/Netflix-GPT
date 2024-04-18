import React from 'react'
import Header from './Header'
import { useState } from 'react';
function Login() {

let [toggle ,settoggle] =useState(true) ; 

const toggleForm = ()=>{
      settoggle(!toggle) ; 
}

  return (
    <div>
      <Header/>
      
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo' />
      </div>

      <form className='absolute p-12 bg-opacity-80  bg-black w-2/6 left-1/3 top-1/4  text-white rounded-lg'>
        <h1 className='text-white font-bold text-2xl m-3'>{toggle ? "Sign In" :"Sign Up"
        }</h1>
         
      { !toggle && ( <input type='text' placeholder='Full Name' className='p-3 m-3 w-full bg-gray-700 rounded-md '/>) }
        <input type='text' placeholder='Email Address' className='p-3 m-3 w-full bg-gray-700 rounded-md '/> 
        <input type='password' placeholder='Password'  className='p-3 m-3 w-full bg-gray-700 rounded-md'/>
        <button className='  bg-red-700 text-white p-2 m-2 w-full rounded-md border-none  '>{toggle ? "Sign In" :"Sign Up"
        }</button>
        <p className='m-4 p-2 cursor-pointer' onClick={toggleForm}> {toggle ? "New to NetFlix ? Sign UP Now" :"Already  Registered ? Sign In."
        }</p>
      </form>
   
    </div>
  )
}

export default Login
