import { apiPrefix } from './config';
import { apiGet } from './apiCaller';

const endpoint = 'followers';

const buildUrl = (account, cursor) => {
    const url = new URL(`${apiPrefix}${endpoint}`);
    url.searchParams.append('screen_name', account);
    url.searchParams.append('cursor', cursor);
    url.searchParams.append('count', '30');
    return url;
};

const getFollowers = (token, account, cursor) => apiGet(token, buildUrl(account, cursor));
export default getFollowers;
