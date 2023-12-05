import { formSlice } from '../slice/slice';

export const { addItemToForm, removeItemFromForm, sortByProp, filterByProp, returnDataAfterFiltering, changeDataById } =
	formSlice.actions;
