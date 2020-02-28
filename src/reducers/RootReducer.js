import { combineReducers } from 'redux';
import homeSearchReducer from './homeSearchReducer';
import lotSearchReducer from './lotSearchReducer';

export const RootReducer = combineReducers({
    homes: homeSearchReducer,
    lots: lotSearchReducer
});