import { FETCH_TOKEN, FETCH_TOKEN_FAILURE, FETCH_TOKEN_SUCCESS } from './actionTypes';

export const fetchTokenRequest = () => ({
    type: FETCH_TOKEN
});

export const fetchTokenSuccess = token => ({
    type: FETCH_TOKEN_SUCCESS,
    payload: token
});

export const fetchTokenFailure = error => ({
    type: FETCH_TOKEN_FAILURE,
    payload: error
});
