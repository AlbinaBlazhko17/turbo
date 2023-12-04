import { IDataForForm } from '@/interfaces/IDataForForms';
import ISelectedItem from '@/interfaces/ISelectedItem';
import { allValues } from '@components/CustomForm/initialValues';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormState {
	formData: IDataForForm[];
	allFormData: IDataForForm[];
	sortingData: IDataForForm[];
}

interface ISortByPropPayload {
	payload: {
		prop: keyof IDataForForm;
		type: 'asc' | 'desc';
	};
}

const initialState: FormState = {
	formData: [allValues],
	sortingData: [],
	allFormData: [allValues],
};

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

			return { formData: updatedState, sortingData: updatedState, allFormData: updatedState };
		},
		removeItemFromForm: (state) => {
			const updatedState = [
				...state.formData.concat({
					...allValues,
					id: state.formData.length + 1,
				}),
			];
			return { formData: updatedState, sortingData: updatedState, allFormData: updatedState };
		},
		sortByProp: (state, action: ISortByPropPayload) => {
			const updatedState = [...state.formData];
			const payloadKey = action.payload.prop as keyof IDataForForm;
			const type = action.payload.type as 'asc' | 'desc';
			if (payloadKey) {
				updatedState.sort((a, b) => {
					if (payloadKey in a && payloadKey in b) {
						if (type === 'asc') {
							if (a[payloadKey]! < b[payloadKey]!) {
								return -1;
							}
							if (a[payloadKey]! > b[payloadKey]!) {
								return 1;
							}
						} else {
							if (a[payloadKey]! > b[payloadKey]!) {
								return -1;
							}
							if (a[payloadKey]! < b[payloadKey]!) {
								return 1;
							}
						}
					}
					return 0;
				});
			}

			return {
				formData: updatedState,
				sortingData: updatedState,
				allFormData: state.allFormData,
			};
		},
		filterByProp: (state, action: PayloadAction<ISelectedItem>) => {
			const payload = action.payload;
			const updatedState = [...state.sortingData];
			let filteredState = [];

			if (
				payload.gender === '' &&
				payload.interests.length === 0 &&
				payload.range[0] === 0 &&
				payload.range[1] === 100
			) {
				return {
					formData: [...state.sortingData],
					allFormData: state.allFormData,
					sortingData: state.sortingData,
				};
			}

			filteredState = updatedState.filter((item) => {
				const isGenderValid = payload.gender !== '';
				const areInterestsValid = payload.interests.length !== 0;
				const isRangeValid = payload.range[0] !== 0 || payload.range[1] !== 100;

				if (isGenderValid || areInterestsValid || isRangeValid) {
					const genderCondition = isGenderValid ? item.gender === payload.gender : true;
					const interestsCondition = areInterestsValid
						? //@ts-ignore
						  payload.interests.every((interest) => item.interests.includes(interest))
						: true;
					const rangeCondition = isRangeValid
						? item.notificationFrequency >= payload.range[0] &&
						  item.notificationFrequency <= payload.range[1]
						: true;

					return genderCondition && interestsCondition && rangeCondition;
				}

				return true;
			});

			return {
				formData: filteredState.length !== 0 ? filteredState : [allValues],
				allFormData: state.allFormData,
				sortingData: state.sortingData,
			};
		},
		returnDataAfterFiltering: (state) => {
			if (state.allFormData.length !== 0) {
				return {
					formData: [...state.allFormData],
					allFormData: state.allFormData,
					sortingData: state.allFormData,
				};
			} else {
				return {
					formData: [...state.formData],
					allFormData: [...state.allFormData],
					sortingData: [...state.sortingData],
				};
			}
		},
	},
});

export default formSlice.reducer;
