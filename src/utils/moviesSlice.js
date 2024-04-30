import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name : "movies" ,
    initialState : {
     nowPlayingMovies : null ,
     popularMovies:null ,
     upcomingMovies: null , 
     topRated : null ,
    },
    reducers : {
        addNowPlayingMovies :(state, action)=>{
               state.nowPlayingMovies = action.payload ; 
        }
        ,
        addPopularMovies :(state , action )=> {
            state.popularMovies = action.payload ; 
        },
        addupcomingMovies :(state , action )=> {
            state.upcomingMovies = action.payload ;
        }
       , 
        addtopRated :(state , action )=> {
            state.topRated = action.payload ;
        },
    } ,
}) ; 

export default movies.reducer ; 
export const {addNowPlayingMovies , addPopularMovies ,addupcomingMovies ,addtopRated } = movies.actions ; 