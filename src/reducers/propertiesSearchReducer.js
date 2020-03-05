import { FETCH_PROPERTIES } from '../actions/types';

export default function (
    state = {
        loading: false,
        lastQuery: '',
        nextQuery: '',
        lotCount: 0,
        lotListingsByID: {},

    },action) {
    switch(action.type) {

        case FETCH_PROPERTIES:
            const lots = action.payload.value.map((obj, i) => ({ [obj.ListingId]: Object.assign({}, {
                    cardData: {
                        coords: [obj.Longitude, obj.Latitude],
                        daysOnMarket: obj.DaysOnMarket, 
                        propertyType: obj.PropertyType,
                        bioText: obj.PublicRemarks,
                        media: obj.media,
                        mediaURL: obj.VirtualTourURLUnbranded
                    }
                }, {
                    fullData: Object.assign(obj, Object.entries(obj).forEach( key_val => (key_val[1] === null || key_val[1] == `${Array(0)}` ? delete obj[key_val[0]] : 0)))
                }
            )}))
            console.log(lots)
            return { 
                ...state,
                lastQuery: action.payload['@odata.context'],
                nextQuery: action.payload['@odata.nextLink'],
                lotCount: action.payload['@odata.count'],
                lotListingsByID: lots
            };

        default:
            return state;
    }
}

// case DELETE_LOTS:
    // return state.filter(lot => lot._id !== action.payload);