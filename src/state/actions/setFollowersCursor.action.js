import { SET_FOLLOWERS_CURSOR } from './actionTypes';

const setFollowersCursor = cursor => ({
    type: SET_FOLLOWERS_CURSOR,
    payload: cursor
});

export default setFollowersCursor;
