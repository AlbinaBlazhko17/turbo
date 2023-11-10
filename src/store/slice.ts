import { createSlice } from "@reduxjs/toolkit";
import { allValues } from "@components/CustomForm/initialValues";

export const formSlice = createSlice({
	name: 'form',
	initialState: [allValues],
	reducers: {
		addItemToForm: (state, action) => {
			const updatedState = [...state];
			const lastObject = updatedState[updatedState.length - 1];
			if (lastObject) {
				updatedState[updatedState.length - 1] = { ...lastObject, ...action.payload };
			}

			return updatedState;
		},
		removeItemFromForm: (state) => {
			return [...state.concat(allValues)];
		},
	}
})

export default formSlice.reducer;