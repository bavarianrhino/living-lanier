
import axios from 'axios';
import { FETCH_HOMES, FETCH_LOTS } from './types';

// PREVIOUS REFACTORS IN NOTES
export const fetchHomes = () => async (dispatch) => {
    const res = await axios.get('');

    dispatch({ type: FETCH_HOMES, payload: res.data });
};

export const fetchLots = () => async (dispatch) => {
    const res = await axios.get('');
    
    dispatch({ type: FETCH_LOTS, payload: res.data });
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
