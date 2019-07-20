import status from '../../constants/status.const';
import { CHANGE_LIST_STATE, SET_FOLLOWERS } from '../actions';

const initialAppState = {
    listState: status.NOT_INITIALIZED,
    account: null,
    followers: []
};

const updateState = (state, newState) => Object.assign({}, state, newState);

const createReducer = (initialState, handlers) => (state = initialState, action) => (handlers.hasOwnProperty(action.type) ? updateState(state, handlers[action.type](state, action)) : state);

const appReducer = createReducer(initialAppState, {
    [CHANGE_LIST_STATE]: (state, action) => ({ listState: action.payload }),
    [SET_FOLLOWERS]: (state, action) => ({ followers: action.payload })
});

export default appReducer;
