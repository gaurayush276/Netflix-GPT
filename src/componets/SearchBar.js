import React from 'react'
import { useSelector } from 'react-redux'
import lang from './languageConstants'
 

const SearchBar = () => {
    const showLanguage = useSelector(store =>store.config.lang)
  return (
    <div className=' absolute  top-40  left-[30%] z-10'>
      <form className=' w-[30rem] flex gap-2 p-2 bg-teal-400 justify-between  rounded'> 
        <input  className=' w-[73rem] p-2 ' type ="text " placeholder={lang[showLanguage].gptSearchPlaceholder} />
        <button className=' bg-red-600 text-white rounded px-2 py-2 ' > {lang[showLanguage].search} </button>
      </form>
    </div>
  )
}

export default SearchBar
