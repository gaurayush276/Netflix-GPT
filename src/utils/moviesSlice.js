import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name : "movies" ,
    initialState : {
     nowPlayingMovies : null ,
     popularMovies:null ,
     upcomingMovies: null , 
    },
    reducers : {
        addNowPlayingMovies :(state, action)=>{
               state.nowPlayingMovies = action.payload ; 
        }
        ,
        addPopularMovies :(state , action )=> {
            state.popularMovies = action.payload ; 
        },
        upcomingMovies :(state , action )=> {
            state.upcomingMovies = action.payload ;
        }
    }
}) ; 

export default movies.reducer ; 
export const {addNowPlayingMovies , addPopularMovies ,upcomingMovies} = movies.actions ; 