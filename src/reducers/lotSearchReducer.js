import { FETCH_LOTS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_LOTS:
            return action.payload
        default:
            return state;
    }
}

// case DELETE_LOTS:
    // return state.filter(lot => lot._id !== action.payload);