import { SORT_LIST } from './actionTypes';

const sortList = sortBy => ({
    type: SORT_LIST,
    payload: sortBy
});

export default sortList;
