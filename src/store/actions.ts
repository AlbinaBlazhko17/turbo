import { formSlice } from "./slice";
import { filteringSlice } from "./sliceFiltering";

export const { addItemToForm, removeItemFromForm, sortByProp } = formSlice.actions;

export const { filterByGender, filterByInterest } = filteringSlice.actions;