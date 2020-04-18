import {
    FETCH_DATA,
    FETCH_FAILED,
    FETCH_SUCCESS,
    ADD_SUCCESS
} from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    console.log('reducer action:', action)
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload]
            }
        default:
            return state;
    }
}