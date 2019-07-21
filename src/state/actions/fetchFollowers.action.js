import { FETCH_FOLLOWERS, FETCH_FOLLOWERS_FAILURE, FETCH_FOLLOWERS_SUCCESS } from './actionTypes';

export const fetchFollowersRequest = () => ({
    type: FETCH_FOLLOWERS
});

export const fetchFollowersSuccess = () => ({
    type: FETCH_FOLLOWERS_SUCCESS
});

export const fetchFollowersFailure = error => ({
    type: FETCH_FOLLOWERS_FAILURE,
    payload: error
});
