import { createSlice } from "@reduxjs/toolkit";
import { allValues } from "@components/CustomForm/initialValues";
import { IDataForForm } from "@/interfaces/IDataForForms";
import { PayloadAction } from '@reduxjs/toolkit';
import { EGender } from "@/customTypes/form.types";

interface FilterPayload {
	filters: string[];
	typeOfFilter: string;
}
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
				updatedState[updatedState.length - 1] = { ...lastObject, ...action.payload, id: updatedState.length, date: new Date().toLocaleString() };
			}

			return { formData: updatedState, previousFormData: updatedState };
		},
		removeItemFromForm: (state) => {
			const updatedState = [...state.formData.concat({ ...allValues, id: state.formData.length + 1 })];
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
		sortByPropDesc: (state, action: PayloadAction<keyof IDataForForm>) => {
			const updatedState = [...state.formData];
			const payloadKey = action.payload as keyof IDataForForm;
			if (payloadKey) {
				updatedState.sort((a, b) => {
					if (payloadKey in a && payloadKey in b) {
						if (a[payloadKey]! > b[payloadKey]!) {
							return -1;
						}
						if (a[payloadKey]! < b[payloadKey]!) {
							return 1;
						}
					}
					return 0;
				});
			}

			return { formData: updatedState, previousFormData: state.previousFormData };
		},
		filterByProp: (state, action) => {
			const payload = action.payload;
			// const type = action.payload.typeOfFilter;
			const updatedState = payload.includes(EGender.Female.toLocaleLowerCase()) || payload.includes(EGender.Male.toLowerCase()) ? [...state.previousFormData] : [...state.formData];

			if (payload.length === 0) {
				return { formData: [...state.previousFormData], previousFormData: state.previousFormData };
			}
			const filteredState = updatedState.filter((item) =>
				//@ts-ignore
				payload.every((filter) => {
					if (filter === EGender.Female.toLocaleLowerCase() || filter === EGender.Male.toLocaleLowerCase()) {
						return item.gender === filter;
					} else {
						//@ts-ignore
						return [...item.interests].includes(filter)
					}
				})
			);
			return { formData: filteredState.length !== 0 ? filteredState : [allValues], previousFormData: state.previousFormData };
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