import ajaxCaller from './ajaxCaller';
import { token } from './auth/authManager';

export const apiPrefix = 'https://api.twitter.com/1.1/';

const buildOptions = options => ({
    ...options,
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
    mode: 'cors',
    credentials: 'include'
});

export const apiGet = (endpoint, options = {}) => ajaxCaller(endpoint, buildOptions(options));
