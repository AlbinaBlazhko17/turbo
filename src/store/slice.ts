import { createSlice } from "@reduxjs/toolkit";
import { allValues } from "@components/CustomForm/initialValues";

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		allValues
	},
	reducers: {
		addItemToForm: (state, action) => {
			return { ...state, ...action.payload };
		},
		removeItemFromForm: (state) => {
			return { ...state, ...allValues }
		},
	}
})

export default formSlice.reducer;