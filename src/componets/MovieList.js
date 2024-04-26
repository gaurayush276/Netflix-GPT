import React from 'react'
 import MovieCard from './MovieCard';


const MovieList = ({title , movies}) => {
   
    return (
 
      <div className=' p-4   '>
        <h1 className=' text-3xl p-4 font-bold text-slate-200'> {title} </h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex gap-2 rounded'>
        { 
         
          movies?.map((item) => (<MovieCard key= {item.id}   poster = {item?.poster_path} /> ))
        }
         </div>
        
        
      
      </div>
    </div>
   
  )
}

export default MovieList
