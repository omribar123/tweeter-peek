import { sortBy } from 'lodash';
import { STATUS, SORT_OPTIONS } from '../../constants';
import {
    CHANGE_LIST_STATE,
    SET_FOLLOWERS,
    SORT_LIST,
    FETCH_TOKEN_SUCCESS,
    SET_FOLLOWERS_CURSOR,
    SET_ACCOUNT
} from '../actions';

const initialAppState = {
    listState: STATUS.NOT_INITIALIZED,
    account: '',
    followers: [],
    sortBy: SORT_OPTIONS[0].value,
    followersCursor: -1
};

const updateState = (state, newState) => Object.assign({}, state, newState);

const createReducer = (initialState, handlers) => (state = initialState, action) => (handlers.hasOwnProperty(action.type) ? updateState(state, handlers[action.type](state, action)) : state);

const appReducer = createReducer(initialAppState, {
    [SET_ACCOUNT]: (state, action) => ({ account: action.payload }),
    [FETCH_TOKEN_SUCCESS]: (state, action) => ({ authToken: action.payload }),
    [CHANGE_LIST_STATE]: (state, action) => ({ listState: action.payload }),
    [SET_FOLLOWERS]: (state, action) => ({ followers: sortBy(action.payload, state.sortBy) }),
    [SET_FOLLOWERS_CURSOR]: (state, action) => ({ followersCursor: action.payload }),
    [SORT_LIST]: (state, action) => ({ followers: sortBy(state.followers, action.payload), sortBy: action.payload })
});

export default appReducer;
