import { userSlice } from '../slice/authSlice';
import { formSlice } from '../slice/slice';

export const {
	addItemToForm,
	removeItemFromForm,
	sortByProp,
	filterByProp,
	returnDataAfterFiltering,
	changeDataById,
	deleteUserById,
} = formSlice.actions;

export const { addUser, changePassword, changeUsername, changeEmail } = userSlice.actions;
