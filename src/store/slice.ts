import { createSlice } from "@reduxjs/toolkit";
import { initialValuesPersonalInfo } from "@components/CustomForm/initialValues";

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		initialValuesPersonalInfo
	},
	reducers: {
		addItemToForm: (state, action) => {
			return { ...state, ...action.payload };
		},
		removeItemFromForm: (state) => {
			return { ...state, ...initialValuesPersonalInfo };
		},
	}
})

export default formSlice.reducer;