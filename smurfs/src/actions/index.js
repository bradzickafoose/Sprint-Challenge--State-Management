import axios from 'axios';

export const REQUEST_START = 'REQUEST_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const getSmurfs = () => dispatch => {
    dispatch({ type: REQUEST_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: REQUEST_FAIL, payload: error }))
}