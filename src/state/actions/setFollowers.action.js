import { SET_FOLLOWERS } from './actionTypes';

const setFollowers = followers => ({
    type: SET_FOLLOWERS,
    payload: followers
});

export default setFollowers;
