import {
    REQUEST_START,
    REQUEST_FAIL,
    FETCH_SMURFS_SUCCESS
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
        default:
            return state;
    }
}