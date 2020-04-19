import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const ADD_DATA = 'ADD_DATA';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';

export const DELETE_DATA = 'DELETE_DATA';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILED = 'DELETE_FAILED';

export const isFetching = () => dispatch => {
    dispatch({ type: FETCH_DATA })
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data })
        })
      .catch(error => dispatch({ type: FETCH_FAILED, payload: error.message }));
}

export const isAdding = formData => dispatch => {
    dispatch({ type: ADD_DATA });
    axios
      .post('http://localhost:3333/smurfs', formData)
      .then(response => {
          dispatch({ type: ADD_SUCCESS, payload: response.data })
      })
      .catch(error => dispatch({ type: ADD_FAILED, payload: error.message }));
}


export const isDeleting = id => dispatch => {
    dispatch({ type: DELETE_DATA })

    const url = `http://localhost:3333/smurfs/${id}`;

    axios
      .delete(url)
      .then(response => {
        dispatch({ type: DELETE_SUCCESS, payload: response.data })
      })
      .catch(error => dispatch({ type: DELETE_FAILED, payload: error.message }));
}