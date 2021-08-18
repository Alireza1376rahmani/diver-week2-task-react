import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "todoWordkReducer",
	initialState: { isLoaded: false, page: 1, data: [] },
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
		setPage: (state, action) => {
			state.page = action.payload;
		},
	},
});

export const { setData, loaded, loading ,setPage} = slice.actions;
export default slice.reducer;
