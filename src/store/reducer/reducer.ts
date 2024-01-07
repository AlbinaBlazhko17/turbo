import { combineReducers } from 'redux';
import form from '../slice/slice';
import user from '../slice/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
	form,
	user,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['form', 'user'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
