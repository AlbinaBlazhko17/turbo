import { createSlice } from "@reduxjs/toolkit";
import { allValues } from "@components/CustomForm/initialValues";
import { IDataForForm } from "@/interfaces/IDataForForms";
import { PayloadAction } from '@reduxjs/toolkit';

interface FormState {
	formData: IDataForForm[];
	previousFormData: IDataForForm[];
}

const initialState: FormState = {
	formData: [allValues],
	previousFormData: [],
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		addItemToForm: (state, action) => {
			const updatedState = [...state.formData];
			const lastObject = updatedState[updatedState.length - 1];
			if (lastObject) {
				updatedState[updatedState.length - 1] = { ...lastObject, ...action.payload, id: updatedState.length };
			}

			return { formData: updatedState, previousFormData: updatedState };
		},
		removeItemFromForm: (state) => {
			const updatedState = [...state.formData.concat(allValues)];
			return { formData: updatedState, previousFormData: updatedState };
		},
		sortByProp: (state, action: PayloadAction<keyof IDataForForm>) => {
			const updatedState = [...state.formData];
			const payloadKey = action.payload as keyof IDataForForm;
			if (payloadKey) {
				updatedState.sort((a, b) => {
					if (payloadKey in a && payloadKey in b) {
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

			return { formData: updatedState, previousFormData: state.previousFormData };
		},
		filterByGender: (state, action: PayloadAction<string>) => {
			const updatedState = [...state.formData];
			const payload = action.payload;

			const filteredState = updatedState.filter((item) => item.gender === payload)
			return { formData: filteredState.length !== 0 ? filteredState : [allValues], previousFormData: state.previousFormData };
		},
		filterByInterest: (state, action: PayloadAction<string>) => {
			const updatedState = [...state.formData];
			const payload = action.payload;
			//@ts-ignore
			const filteredState = updatedState.filter((item) => item.interests.includes(payload));
			return { formData: filteredState.length !== 0 ? filteredState : [allValues], previousFormData: [...state.previousFormData] };
		},
		returnDataAfterFiltering: (state) => {
			if (state.previousFormData.length !== 0) {
				return { formData: [...state.previousFormData], previousFormData: state.previousFormData };
			} else {
				return { formData: [...state.formData], previousFormData: [...state.formData] };
			}
		}
	}
})

export default formSlice.reducer;