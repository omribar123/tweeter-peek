import { CHANGE_APP_STATE } from './actionTypes';

export const changeAppState = state => ({
    action: CHANGE_APP_STATE,
    payload: state
});
