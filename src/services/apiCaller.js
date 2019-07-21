import ajaxCaller from './ajaxCaller';

const buildOptions = (token, options) => ({
    ...options,
    headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
    }
});

export const apiGet = (token, endpoint, options = {}) => ajaxCaller(endpoint, buildOptions(token, options));
