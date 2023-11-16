import { combineReducers } from "redux";
import form from './slice';
import filter from './sliceFiltering';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
	form,
	filter
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['form', 'filter'],
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);