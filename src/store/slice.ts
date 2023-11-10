import { createSlice } from "@reduxjs/toolkit";
import { allValues } from "@components/CustomForm/initialValues";

export const formSlice = createSlice({
	name: 'form',
	initialState: [allValues],
	reducers: {
		addItemToForm: (state, action) => {
			return [...state, ...state.concat(action.payload)];
		},
		removeItemFromForm: (state) => {
			return [...state, ...state.concat(allValues)];
		},
	}
})

export default formSlice.reducer;