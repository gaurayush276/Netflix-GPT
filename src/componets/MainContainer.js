import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store =>store.movies?.nowPlayingMovies) ; 

    // for the main movie that will shown up in the main page 
    // if there is no movies or the page is not loded yet so to avoid the error 
    if( !movies )
    return ; 
const mainMovie = movies[5] ; 
 console.log(mainMovie) ; 
 const {original_title , overview ,id } =  mainMovie ; 

  return (
    <div className=' '>
      <VideoTitle title = {original_title } overview = {overview} />
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer ; 
