import { FETCH_RESIDENCES } from '../actions/types';

export default function (
    state = {
        loading: false,
        lastQuery: '',
        nextQuery: '',
        residenceCount: 0,
        residenceListingsByID: {},

    },action) {
    switch(action.type) {

        case FETCH_RESIDENCES:
            const listings = action.payload.value.map((obj, i) => ({ [obj.ListingId]: Object.assign({}, {
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
            console.log(listings)
            return { 
                ...state,
                lastQuery: action.payload['@odata.context'],
                nextQuery: action.payload['@odata.nextLink'],
                residenceCount: action.payload['@odata.count'],
                residenceListingsByID: listings
            };

        default:
            return state;
    }
}

// case DELETE_HOMES:
    // return state.filter(home => home._id !== action.payload);