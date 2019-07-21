import { SET_ACCOUNT } from './actionTypes';

const setAccount = account => ({
    type: SET_ACCOUNT,
    payload: account
});

export default setAccount;
