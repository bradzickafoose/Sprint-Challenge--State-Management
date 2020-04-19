import {
    FETCH_DATA,
    FETCH_FAILED,
    FETCH_SUCCESS,
    ADD_DATA,
    ADD_SUCCESS,
    ADD_FAILED,
    DELETE_DATA,
    DELETE_SUCCESS,
    DELETE_FAILED
} from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
}

export const reducer = (state=initialState, action) => {
    console.log('reducer state:', state);

    switch (action.type) {
        case FETCH_DATA:
        case ADD_DATA:
        case DELETE_DATA:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_SUCCESS:
        case ADD_SUCCESS:
        case DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }

        case FETCH_FAILED:
        case ADD_FAILED:
        case DELETE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}