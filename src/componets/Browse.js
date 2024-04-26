import React, { useEffect } from 'react' ; 
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch  } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies ,upcomingMovies} from '../utils/moviesSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
function Browse() {

 

  const dispatch = useDispatch () ; 
  const navigate = useNavigate() ; 
  
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
      
    })
    .catch((error)=>{
      navigate("/error") ; 
    })
  } 
  
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
  .then(response =>  dispatch (upcomingMovies(response.results))  )
  .catch(err => console.error(err));
  

 
},[])

 

  return (
    <div className='w-full'> 
      <div className='flex justify-between w-full'>
      <Header/>
      <button className='w-[4rem] h-[2rem] bg-red-600/100 absolute right-5 top-8 z-10 rounded-sm text-sm text-white'  onClick={handleSignOut}  > Sign Out </button>
    </div>
    <MainContainer/>
    <SecondaryContainer/>



    </div>
    
  )
}

export default Browse;
