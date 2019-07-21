const request = require('request');

const headers = {
    Authorization: 'Basic N01WNXVUWEJ2djJBOVhEenRXZVdPWEkxYjppN2htSzRJZk5UNURIYjZSd2gyNE02N05yVmhpREI3d2NmT1RsaWpCSGtoaUpVYmVhcg==',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};
const body = 'grant_type=client_credentials';
const url = 'https://api.twitter.com/oauth2/token';

exports.getBearerToken = (req, res) => {
    request.post({
        url,
        headers,
        body,
        json: true
    }, (err, response, responseBody) => {
        if (err || !responseBody.access_token) {
            res.send(err);
        }

        return res.send(responseBody);
    });
};
