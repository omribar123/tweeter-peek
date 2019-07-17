import { TOGGLE_LIST_DISPLAY } from './actionTypes';

export const toggleListDisplay = shouldShowMore => ({
    action: TOGGLE_LIST_DISPLAY,
    payload: { shouldShowMore }
});
