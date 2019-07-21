import { authApi } from '../../services';
import {
    fetchTokenRequest, fetchTokenSuccess, fetchTokenFailure
} from '../actions';

const fetchToken = () => (dispatch) => {
    dispatch(fetchTokenRequest());
    authApi.getToken().then((token) => {
        dispatch(fetchTokenSuccess(token));
    }).catch((error) => {
        dispatch(fetchTokenFailure(error));
    });
};

export default fetchToken;
