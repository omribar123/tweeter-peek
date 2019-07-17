import { SORT_LIST } from './actionTypes';

export const sortList = sortBy => ({
    action: SORT_LIST,
    payload: sortBy
});
