import { setAccount, setFollowers, setFollowersCursor } from '../actions';

const initAccountState = account => (dispatch) => {
    dispatch(setAccount(account));
    dispatch(setFollowersCursor(-1));
    dispatch(setFollowers([]));
};

export default initAccountState;
