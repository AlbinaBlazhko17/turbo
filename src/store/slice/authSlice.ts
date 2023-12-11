import { IUser } from '@/interfaces/IDataForAuth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
	username: '',
	email: '',
	password: '',
	checkPassword: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.checkPassword = action.payload.checkPassword;
		},
	},
});

export default userSlice.reducer;
