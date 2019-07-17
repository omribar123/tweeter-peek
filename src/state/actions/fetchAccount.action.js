import { FETCH_ACCOUNT, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE } from './actionTypes';

export const fetchAccount = account => ({
    type: FETCH_ACCOUNT,
    payload: account
});

export const fetchAccountSuccess = followers => ({
    type: FETCH_ACCOUNT_SUCCESS,
    payload: followers
});

export const fetchAccountFailure = error => ({
    type: FETCH_ACCOUNT_FAILURE,
    payload: error
});
