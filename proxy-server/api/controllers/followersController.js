const request = require('request');

const url = 'https://api.twitter.com/1.1/followers/list.json';

exports.getFollowers = (req, res) => {
    request.get({
        url,
        headers: {
            Authorization: req.get('authorization'),
            'content-type': 'application/json'
        },
        qs: req.query,
        json: true
    }, (err, response, responseBody) => {
        const { users, next_cursor: nextCursor, previous_cursor: prevCursor } = responseBody;

        if (users) {
            const followers = users.map((follower) => {
                const {
                    id, name, screen_name: screenName, description, followers_count: followersCount,
                    friends_count: followingCount, profile_image_url: profileThumbnail, statuses_count: tweetsCount, favourites_count: likesCount
                } = follower;

                return {
                    id,
                    name,
                    screenName,
                    description,
                    followersCount,
                    followingCount,
                    profileThumbnail,
                    tweetsCount,
                    likesCount
                };
            });
            return res.send({ followers, prevCursor, nextCursor });
        }
        return res.send(responseBody);
    });
};
