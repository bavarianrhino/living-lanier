import { combineReducers } from 'redux';
import homeSearchReducer from './homeSearchReducer';
import lotSearchReducer from './lotSearchReducer';

export const RootReducer = combineReducers({
    home: homeSearchReducer,
    lot: lotSearchReducer
});