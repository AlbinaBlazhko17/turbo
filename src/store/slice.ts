import { createSlice } from "@reduxjs/toolkit";
import { allValues } from "@components/CustomForm/initialValues";
import { IDataForForm } from "@/interfaces/IDataForForms";
import { PayloadAction } from '@reduxjs/toolkit';

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
		sortByProp: (state, action: PayloadAction<keyof IDataForForm>) => {
			const updatedState = [...state];
			const payloadKey = action.payload as keyof IDataForForm;
			if (action.payload) {
				updatedState.sort((a, b) => {
					if (action.payload in a && action.payload in b) {
						if (a[payloadKey]! < b[payloadKey]!) {
							return -1;
						}
						if (a[payloadKey]! > b[payloadKey]!) {
							return 1;
						}
					}
					return 0;
				});
			}

			return updatedState;
		},
	}
})

export default formSlice.reducer;