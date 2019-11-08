import axios from 'axios';

export const REQUEST_START = 'REQUEST_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const getSmurfs = () => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: REQUEST_FAIL, payload: error }))
}

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data })
                .catch(error => dispatch({ type: ADD_SMURF_FAIL, payload: error }))
        })
} 