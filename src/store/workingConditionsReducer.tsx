import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "workingConditionsReducer",
	initialState: { isLoaded: false, data: {} },
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		loaded: (state, action) => {
			state.isLoaded = true;
		},
		loading: (state, action) => {
			state.isLoaded = false;
		},
		// setWorks: (state, action) => {
		// 	state.data.works = action.payload;
		// },
	},
});

export default slice.reducer;
export const { setData, loaded, loading } = slice.actions;
