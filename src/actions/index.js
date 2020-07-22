
import axios from 'axios';
import { FETCH_RESIDENCES, FETCH_RESIDENCES2, FETCH_PROPERTIES } from './types';

// ==== KEYS ==== //
// REACT_APP_API_GOOGLE_MAPS_API_KEY
// REACT_APP_API_MAP_BOX_API_KEY
// REACT_APP_API_BRIDGE_INTERACTIVE_API_SERVER_TOKEN
// REACT_APP_API_BRIDGE_INTERACTIVE_API_CLIENT_SECRET
// REACT_APP_API_BRIDGE_INTERACTIVE_API_BROWSER_TOKEN
// REACT_APP_API_BRIDGE_INTERACTIVE_API_CLIENT_ID
// REACT_APP_MLS_DATASET
// REACT_APP_REDIRECT_DOMAIN

const keys = require('../utilities/config/keys');

// PREVIOUS REFACTORS IN NOTES
export const fetchResidences = () => async (dispatch) => {
    // const res = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${keys.REACT_APP_API_BRIDGE_INTERACTIVE_API_SERVER_TOKEN}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20MlsStatus%20ne%20%27Closed%27%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)`);
    const res = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${keys.REACT_APP_API_BRIDGE_INTERACTIVE_API_SERVER_TOKEN}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)`);
    // const res2 = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Property?access_token=${bridge + inter}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20MlsStatus%20ne%20%27Closed%27%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)&$skip=200)`);
    // const res = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${bridge + inter}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20contains(FMLS_PreviousStatus,%20%27Active%27)%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)`);
                                // 'https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${BRIDGE_INTERACTIVE_API_SERVER_TOKEN}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20contains(FMLS_PreviousStatus,%20%27Active%27)%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)&$skip=200'
    dispatch({ type: FETCH_RESIDENCES, payload: res.data });
    // dispatch({ type: FETCH_RESIDENCES, payload: res2.data });
};
export const fetchResidences2 = () => async (dispatch) => {
    // const res = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${bridge + inter}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20MlsStatus%20ne%20%27Closed%27%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)`);
    // const res2 = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${keys.REACT_APP_API_BRIDGE_INTERACTIVE_API_SERVER_TOKEN}&$top=200&$skip=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20MlsStatus%20ne%20%27Closed%27%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)`);
    // const res = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${bridge + inter}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20contains(FMLS_PreviousStatus,%20%27Active%27)%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)`);
                                // 'https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${BRIDGE_INTERACTIVE_API_SERVER_TOKEN}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20contains(FMLS_PreviousStatus,%20%27Active%27)%20and%20contains(FMLS_MlsPropertyType,%20%27Residential%20Detached%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)&$skip=200'
    // dispatch({ type: FETCH_RESIDENCES, payload: res.data });
    dispatch({ type: FETCH_RESIDENCES2, payload: res2.data });
};

export const fetchProperties = () => async (dispatch) => {
    const res = await axios.get(`https://api.bridgedataoutput.com/api/v2/OData/${keys.REACT_APP_MLS_DATASET}/Properties?access_token=${keys.REACT_APP_API_BRIDGE_INTERACTIVE_API_SERVER_TOKEN}&$top=200&$orderby=DaysOnMarket&$filter=contains(WaterBodyName,%20%27Lanier%27)%20and%20year(ListingContractDate)%20gt%202018%20and%20contains(FMLS_PreviousStatus,%20%27Active%27)%20and%20contains(PropertyType,%20%27Land%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27None%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Courtesy%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Shared%27)%20and%20FMLS_Dock/any(a:%20a%20ne%20%27Other%27)`);
    
    dispatch({ type: FETCH_PROPERTIES, payload: res.data });
};

// export const handleToken = (token) => async (dispatch) => {
//     const res = await axios.post('/api/stripe', token);
    
//     dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const submitSurvey = (values, history) => async dispatch => {
//     const res = await axios.post('/api/surveys', values);

//     history.push('/surveys');
//     console.log(history)
//     dispatch({ type: FETCH_USER, payload: res.data });
// };
