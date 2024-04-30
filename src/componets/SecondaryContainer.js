import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';



const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies) ; 

  return (
    <div className='  -mt-60 bg-black'>
      <MovieList title = "Now Playing " movies = {movies?.nowPlayingMovies} />
      <MovieList title = "Top Rated " movies = {movies?.popularMovies} />
      <MovieList title = "Popular " movies = {movies?.topRated} />
      <MovieList title = "UpComing " movies = {movies?.upcomingMovies} />
    </div>  
  )
}

export default SecondaryContainer ; 
