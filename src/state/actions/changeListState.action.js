import { CHANGE_LIST_STATE } from './actionTypes';

const changeListState = state => ({
    type: CHANGE_LIST_STATE,
    payload: state
});

export default changeListState;
