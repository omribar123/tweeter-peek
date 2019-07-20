import { TOGGLE_LIST_DISPLAY } from './actionTypes';

const toggleListDisplay = shouldShowMore => ({
    type: TOGGLE_LIST_DISPLAY,
    payload: { shouldShowMore }
});

export default toggleListDisplay;
