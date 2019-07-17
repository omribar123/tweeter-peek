import status from '../../constants/status.const';
import { CHANGE_APP_STATE, FETCH_ACCOUNT_SUCCESS } from '../actions';
const initialAppState = {
    appState: status.ACTIVE,
    account: null,
    followers: []
};

const createReducer = (initialState, handlers) =>
    (state = initialState, action) =>
        handlers.hasOwnProperty(action.type) ? updateState(state, handlers[action.type](state, action)) : state;

const updateState = (state, newState) => Object.assign({}, state, newState);

const appReducer = createReducer(initialAppState, {
    [CHANGE_APP_STATE]: (state, action) => ({ appState: action.payload }),
    [FETCH_ACCOUNT_SUCCESS]: (state, action) => ({ followers: action.payload })
});

export default appReducer;
