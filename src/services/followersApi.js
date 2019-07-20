import { apiGet, apiPrefix } from './apiCaller';

const endpoint = 'followers/list.json';

const buildUrl = (account) => {
    const url = new URL(`${apiPrefix}${endpoint}`);
    url.searchParams.append('screen_name', account);
    return url;
};

const getFollowers = account => apiGet(buildUrl(account));
export default getFollowers;
