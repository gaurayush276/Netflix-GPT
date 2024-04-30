import React, { useEffect } from 'react' ; 
import Header from './Header';

import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector  } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies  , addupcomingMovies, addtopRated} from '../utils/moviesSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
function Browse() {

  const showGptSearch = useSelector(store => store.gpt.toggle) ; 
 
  const dispatch = useDispatch () ; 
  
  // this section is fethcing the data add putting it in the store 

useEffect(()=> {
  // dispatching the now playing movies 
  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  .then(response => response.json())
  .then(response => { 
    console.log(response.results) ; 
   dispatch (addNowPlayingMovies(response.results))  ;

  // dispatching the  popular movies 
  fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
.then(response => response.json())
.then(response =>{ 
  console.log('Trending movies')
  console.log(response.results) ; 
  dispatch (addPopularMovies(response.results))  ; })
.catch(err => console.error(err));
} )

// dispatching the upcoming movies 
fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
  .then(response => response.json())
  .then(response =>  dispatch (addupcomingMovies(response.results))  )
  .catch(err => console.error(err));
  
  // dispatching top rated movies 
  fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
  .then(response => response.json())
  .then(response => dispatch (addtopRated(response.results))  )  
  .catch(err => console.error(err));
 
},[])

 

  return (
    <div className='w-full'> 
      <div className='flex justify-between w-full'>
      <Header/>
      </div> 
  
    {
      showGptSearch ? <GptSearch/> : 
      <>  
      <MainContainer/>
    <SecondaryContainer/>
      </>
    }
        
     
        
  
   


    </div>
    
  )
}

export default Browse;
