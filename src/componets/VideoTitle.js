import React from 'react'

const VideoTitle = ( {title , overview }) => {
  return (
    <div  className='pt-36 px-12 w-[30rem] absolute text-white z-10'>
      <h1 className=' m-6 text-5xl font-bold drop-shadow'> {title}</h1>
      <p1 className=' py-6  text-base w-1/4'> {overview} </p1>
      <div> 
      <button className=' bg-white hover:bg-gray-300 text-black p-3 px-6 text-lg   rounded-lg m-2'> Play </button>
      <button className='bg-gray-500 text-white p-3 px-6 text-lg rounded-lg'> More Info </button>

      </div>
      
    </div>
  )
}

export default VideoTitle
