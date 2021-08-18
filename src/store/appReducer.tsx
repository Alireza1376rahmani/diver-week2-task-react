import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"appReducer",
    initialState: {isLoaded:false , data:{}, info:{} },
    //  data : {all information to start signup}
    // info : {all information we need to render header and decide what component to show}
    reducers:{
        setData :(state,action)=>{
            state.data = action.payload;
            state.info =action.payload
        },
        loaded:(state,action) =>{
            state.isLoaded = true
        },
        loading:(state,action)=>{
            state.isLoaded = false
        },
        updateInfo:(state,action)=>{
            state.info =  action.payload
        }
    }
});


export const {setData , loaded , loading , updateInfo} = slice.actions
export default slice.reducer
