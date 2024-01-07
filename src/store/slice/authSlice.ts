import { IUser } from '@/interfaces/IDataForAuth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Omit<IUser, 'checkPassword'> = {
	username: '',
	email: '',
	password: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.password = action.payload.password;
		},
		changePassword: (state, action: PayloadAction<{ newPassword: string }>) => {
			state.password = action.payload.newPassword;
		},
	},
});

export default userSlice.reducer;
