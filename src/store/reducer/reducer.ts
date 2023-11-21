import { combineReducers } from "redux";
import form from '../slice/slice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
	form,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['form'],
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);