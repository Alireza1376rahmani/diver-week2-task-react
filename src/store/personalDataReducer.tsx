import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
	name: "personalDataReducer",
	initialState: { isLoaded: false, data: {} },
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
            // console.log("from personalDataReducer", action.payload);
		},
		loaded: (state, action) => {
			state.isLoaded = true;
		},
		loading: (state, action) => {
			state.isLoaded = false;
		},
	},
});


export const {setData, loaded , loading} = slice.actions
export default slice.reducer
