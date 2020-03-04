import { FETCH_RESIDENCES } from '../actions/types';

export default function (
    state = {
        loading: false,
        last_residence_fetch_query: '',
        next_residence_fetch_query: '',
        residence_fetch_count: 0,
        residence_listings: [],

    },action) {
    switch(action.type) {

        case FETCH_RESIDENCES:
            return { 
                ...state,
                last_residence_fetch_query: action.payload['@odata.context'],
                next_residence_fetch_query: action.payload['@odata.nextLink'],
                residence_fetch_count: action.payload['@odata.count'],
                residence_listings: action.payload.value
            };

        default:
            return state;
    }
}

// case DELETE_HOMES:
    // return state.filter(home => home._id !== action.payload);