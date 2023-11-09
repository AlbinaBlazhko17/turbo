import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
	name: 'form',
	initialState: {},
	reducers: {
		addItemToForm: (state, action) => {
			return { ...action.payload };
		},
		removeItemFromForm: () => {
			return;
		},
	}
})

export default formSlice.reducer;