import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice" ; 
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";
 


const appStore = configureStore(
    {
        reducer :{
            user : userReducer  , 
            movies : moviesReducer , 
            gpt : gptReducer , 
            config : configSlice ,
        } ,
    }
)

export default appStore ; 