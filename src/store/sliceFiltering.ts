import { allValues } from "@/components/CustomForm/initialValues";
import { IDataForForm } from "@/interfaces/IDataForForms";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const filteringSlice = createSlice({
	name: 'filter',
	initialState: [allValues],
	reducers: {
		filterByGender: (state, action: PayloadAction<{ data: IDataForForm[], type: string }>) => {
			const updatedState = action.payload.data;
			const payload = action.payload.type;

			const filteredState = updatedState.filter((item) => item.gender !== payload)
			return filteredState;
		},
		filterByInterest: (state, action: PayloadAction<{ data: IDataForForm[], type: string }>) => {
			const updatedState = action.payload.data;
			const payload = action.payload.type;
			const filteredState = updatedState.filter((item) => item.interests.some((interest) => interest === payload))
			return filteredState;
		}
	}
})

export default filteringSlice.reducer;