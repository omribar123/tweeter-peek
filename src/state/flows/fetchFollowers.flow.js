import { STATUS } from '../../constants';
import { getFollowersApi } from '../../services';
import {
    fetchFollowersRequest,
    fetchFollowersFailure,
    fetchFollowersSuccess,
    changeListState,
    setFollowers,
    setFollowersCursor
} from '../actions';
import initAccountState from './initAccountState.flow';

const fetchFollowers = account => (dispatch, getState) => {
    const {
        authToken,
        followersCursor,
        account: stateAccount,
        followers: stateFollowers
    } = getState();
    const isNewAccount = account !== stateAccount;
    const requestCursor = isNewAccount ? -1 : followersCursor;

    if (isNewAccount) {
        dispatch(initAccountState(account));
    }
    dispatch(changeListState(STATUS.LOADING));
    dispatch(fetchFollowersRequest());
    getFollowersApi(authToken, account, requestCursor)
        .then((response) => {
            const followers = isNewAccount ? [...response.followers] : [...stateFollowers, ...response.followers];

            dispatch(changeListState(STATUS.ACTIVE));
            dispatch(fetchFollowersSuccess());
            dispatch(setFollowers(followers));
            dispatch(setFollowersCursor(response.nextCursor));
        })
        .catch((error) => {
            dispatch(changeListState(STATUS.ERROR));
            dispatch(fetchFollowersFailure(error));
        });
};

export default fetchFollowers;
