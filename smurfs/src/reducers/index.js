import {
    REQUEST_START,
    REQUEST_FAIL,
    FETCH_SMURFS_SUCCESS,
    ADD_SMURF_START,
    ADD_SMURF_FAIL,
    ADD_SMURF_SUCCESS
} from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    console.log('reducer action:', action)
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: '',
                error: action.payload
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload]
            }
        default:
            return state;
    }
}