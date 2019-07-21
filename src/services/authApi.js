import ajaxCaller from './ajaxCaller';
import { apiPrefix } from './config';

const authApi = {
    getToken: () => ajaxCaller(`${apiPrefix}token`)
        .then(response => response.access_token)
        .catch((error) => {
            console.log(error);
        })
};

export default authApi;
