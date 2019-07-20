import ajaxCaller from '../ajaxCaller';

const key = 'N01WNXVUWEJ2djJBOVhEenRXZVdPWEkxYjppN2htSzRJZk5UNURIYjZSd2gyNE02N05yVmhpREI3d2NmT1RsaWpCSGtoaUpVYmVhcg==';
const endpoint = 'https://api.twitter.com/oauth2/token';
const headers = {
    Authorization: `Basic ${key}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};
const body = 'grant_type=client_credentials';
const method = 'POST';
const options = { method, headers, body };

const authApi = () => ajaxCaller(endpoint, options)
    .then((x) => {
        console.log(x);
    })
    .catch((x) => {
        console.log(x);
    });

export default authApi;
