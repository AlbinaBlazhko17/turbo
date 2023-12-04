import { formSlice } from '../slice/slice';

export const { addItemToForm, removeItemFromForm, sortByProp, filterByProp, returnDataAfterFiltering } =
	formSlice.actions;
