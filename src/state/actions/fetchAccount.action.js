import { FETCH_ACCOUNT, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE } from './actionTypes';

export const fetchAccountRequest = () => ({
    type: FETCH_ACCOUNT
});

export const fetchAccountSuccess = () => ({
    type: FETCH_ACCOUNT_SUCCESS
});

export const fetchAccountFailure = error => ({
    type: FETCH_ACCOUNT_FAILURE,
    payload: error
});
