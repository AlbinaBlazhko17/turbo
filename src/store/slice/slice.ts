import { createSlice } from '@reduxjs/toolkit';
import { allValues } from '@components/CustomForm/initialValues';
import { IDataForForm } from '@/interfaces/IDataForForms';
import { PayloadAction } from '@reduxjs/toolkit';
import { EGender } from '@/customTypes/form.types';
import ISelectedItem from '@/interfaces/ISelectedItem';

interface FormState {
	formData: IDataForForm[];
	previousFormData: IDataForForm[];
}

const initialState: FormState = {
	formData: [allValues],
	previousFormData: [],
};

interface IFilterPayload extends ISelectedItem {
	type: string;
}

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		addItemToForm: (state, action) => {
			const updatedState = [...state.formData];
			const lastObject = updatedState[updatedState.length - 1];
			if (lastObject) {
				updatedState[updatedState.length - 1] = {
					...lastObject,
					...action.payload,
					id: updatedState.length,
					date: new Date().toLocaleString(),
				};
			}

			return { formData: updatedState, previousFormData: updatedState };
		},
		removeItemFromForm: (state) => {
			const updatedState = [
				...state.formData.concat({
					...allValues,
					id: state.formData.length + 1,
				}),
			];
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

			return {
				formData: updatedState,
				previousFormData: state.previousFormData,
			};
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

			return {
				formData: updatedState,
				previousFormData: state.previousFormData,
			};
		},
		filterByProp: (state, action: PayloadAction<ISelectedItem>) => {
			const payload = action.payload;
			const updatedState = [...state.previousFormData];
			let filteredState = [];

			if (
				payload.gender === '' &&
				payload.interests.length === 0 &&
				payload.range[0] === 0 &&
				payload.range[1] === 100
			) {
				return {
					formData: [...state.previousFormData],
					previousFormData: state.previousFormData,
				};
			}

			filteredState = updatedState.filter((item) => {
				if (payload.gender !== '') {
					return item.gender === payload.gender;
				}
				if (payload.interests.length !== 0) {
					return payload.interests.every((interest) => item.interests.includes(interest));
				}
				if (payload.range[0] !== 0 || payload.range[1] !== 100) {
					return (
						item.notificationFrequency >= payload.range[0] && item.notificationFrequency <= payload.range[1]
					);
				}
			});

			return {
				formData: filteredState.length !== 0 ? filteredState : [allValues],
				previousFormData: state.previousFormData,
			};
		},
		returnDataAfterFiltering: (state) => {
			if (state.previousFormData.length !== 0) {
				return {
					formData: [...state.previousFormData],
					previousFormData: state.previousFormData,
				};
			} else {
				return {
					formData: [...state.formData],
					previousFormData: [...state.formData],
				};
			}
		},
	},
});

export default formSlice.reducer;
