import STATUS from '../../constants/status.const';
import { getFollowersApi } from '../../services';
import {
    fetchAccountRequest,
    fetchAccountFailure,
    fetchAccountSuccess,
    changeListState,
    setFollowers
} from '../actions';
import mockedData from '../../users';

const fetchAccount = account => (dispatch) => {
    dispatch(changeListState(STATUS.LOADING));
    dispatch(fetchAccountRequest());
    getFollowersApi(account).then((followers) => {
        dispatch(changeListState(STATUS.ACTIVE));
        dispatch(fetchAccountSuccess());
        dispatch(setFollowers(followers.users));
    }).catch((error) => {
        dispatch(changeListState(STATUS.ERROR));
        dispatch(fetchAccountFailure(error));
        dispatch(changeListState(STATUS.ACTIVE));
        dispatch(fetchAccountSuccess());
        dispatch(setFollowers(mockedData.users));
    });
};

export default fetchAccount;
