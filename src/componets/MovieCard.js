import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  
  return (
           <div className=' w-36 '>
            <img className=' rounded-md' src={IMG_CDN_URL + poster} alt='movieCard'/>
           </div>
  )
}

export default MovieCard
