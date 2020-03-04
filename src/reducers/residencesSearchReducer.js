import { FETCH_RESIDENCES } from '../actions/types';

export default function (
    state = {
        
    },action) {
    switch(action.type) {

        case FETCH_RESIDENCES:
            return action.payload

        default:
            return state;
    }
}

// case DELETE_HOMES:
    // return state.filter(home => home._id !== action.payload);