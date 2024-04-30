import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name :'gpt' , 
    initialState :{
        toggle : false ,

    },
    reducers :{
        showGtpView :(state)=>{
            state.toggle = !state.toggle ; 
        }
    }
    
})

export default gptSlice.reducer ; 
export const {showGtpView} = gptSlice.actions ; 