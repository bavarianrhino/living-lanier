import { FETCH_RESIDENCES, FETCH_RESIDENCES2 } from '../actions/types';

export default function (
    state = {
        loading: false,
        lastQuery: '',
        nextQuery: '',
        residenceCount: 0,
        topThreeLatest: {},
        residenceListingsByID: []

    },action) {
    switch(action.type) {

        case FETCH_RESIDENCES:
        case FETCH_RESIDENCES2:
            // const listings = action.payload.value.map((obj, i) => ({ [obj.ListingId]: Object.assign({}, {
            
            const listings = action.payload.value.map((obj, i) => ( Object.assign({}, {
                    listingId: obj.ListingId,
                    cardData: {
                        price: obj.FMLS_CurrentPrice,
                        listPrice: obj.ListPrice,
                        originalListPrice: obj.OriginalListPrice,
                        totalBathrooms: obj.BathroomsTotalInteger,
                        fullLowerBathrooms: obj.FMLS_LowerLevelFullBathrooms,
                        halfLowerBathrooms: obj.FMLS_LowerLevelHalfBathrooms,
                        fullUpperBathrooms: obj.FMLS_UpperLevelFullBathrooms,
                        halfUpperBathrooms: obj.FMLS_UpperLevelHalfBathrooms,
                        lowerBedrooms: obj.FMLS_LowerLevelBedrooms,
                        upperBedrooms: obj.FMLS_UpperLevelBedrooms,
                        coords: [obj.Longitude, obj.Latitude],
                        daysOnMarket: obj.DaysOnMarket, 
                        propertyType: obj.PropertyType,
                        bioText: obj.PublicRemarks,
                        photoCount: obj.PhotosCount,
                        media: obj.Media,
                        mediaURL: obj.VirtualTourURLUnbranded
                    },
                // }, {
                    fullData: Object.assign(obj, Object.entries(obj).forEach( key_val => (key_val[1] === null || key_val[1] == `${Array(0)}` || key_val[1] == ["None"] || key_val[1] == "None" ? delete obj[key_val[0]] : 0)))
                }
            )))
            console.log(listings)
            return { 
                ...state,
                lastQuery: action.payload['@odata.context'],
                nextQuery: action.payload['@odata.nextLink'],
                residenceCount: action.payload['@odata.count'],
                topThreeLatest: [listings[0], listings[1], listings[2]],
                residenceListingsByID: [
                    ...(state.residenceListingsByID || []),
                    ...listings,
                  ]
                // residenceListingsByID: Object.assign({...state.residenceListingsByID}, {listings})
            }
            //     residenceListingsByID: {...state.residenceListingsByID.listings, ...(Object.assign({...state.residenceListingsByID}, {...{...action.payload.value.map((obj, i) => ( Object.assign({}, {
            //         listingId: obj.ListingId,
            //         cardData: {
            //             price: obj.FMLS_CurrentPrice,
            //             listPrice: obj.ListPrice,
            //             originalListPrice: obj.OriginalListPrice,
            //             totalBathrooms: obj.BathroomsTotalInteger,
            //             fullLowerBathrooms: obj.FMLS_LowerLevelFullBathrooms,
            //             halfLowerBathrooms: obj.FMLS_LowerLevelHalfBathrooms,
            //             fullUpperBathrooms: obj.FMLS_UpperLevelFullBathrooms,
            //             halfUpperBathrooms: obj.FMLS_UpperLevelHalfBathrooms,
            //             lowerBedrooms: obj.FMLS_LowerLevelBedrooms,
            //             upperBedrooms: obj.FMLS_UpperLevelBedrooms,
            //             coords: [obj.Longitude, obj.Latitude],
            //             daysOnMarket: obj.DaysOnMarket, 
            //             propertyType: obj.PropertyType,
            //             bioText: obj.PublicRemarks,
            //             photoCount: obj.PhotosCount,
            //             media: obj.Media,
            //             mediaURL: obj.VirtualTourURLUnbranded
            //         },
            //     // }, {
            //         fullData: Object.assign(obj, Object.entries(obj).forEach( key_val => (key_val[1] === null || key_val[1] == `${Array(0)}` || key_val[1] == ["None"] || key_val[1] == "None" ? delete obj[key_val[0]] : 0)))
            //     }
            // )))}
            // // console.log(listings)
            // }))}}

        default:
            return state;
    }
}

// case DELETE_HOMES:
    // return state.filter(home => home._id !== action.payload);