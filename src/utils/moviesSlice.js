import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name : "movies" ,
    initialState : {
     nowPlayingMovies : null ,
    },
    reducers : {
        addNowPlayingMovies :(state, action)=>{
               state.nowPlayingMovies = action.payload ; 
        }
    }
}) ; 

export default movies.reducer ; 
export const {addNowPlayingMovies} = movies.actions ; 