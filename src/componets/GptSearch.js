import React from 'react'
import SearchBar from './SearchBar'
import { background } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className=' overflow-y-hidden '>
      <img className='relative ' src={background}/>
      <SearchBar/>
    </div>
  )
}
export default GptSearch
