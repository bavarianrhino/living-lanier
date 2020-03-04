import { combineReducers } from 'redux';
import residencesSearchReducer from './residencesSearchReducer';
import propertiesSearchReducer from './propertiesSearchReducer';

export const RootReducer = combineReducers({
    residences: residencesSearchReducer,
    properties: propertiesSearchReducer
});