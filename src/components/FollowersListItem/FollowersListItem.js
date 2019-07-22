import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    ListItem, ListItemAvatar, Avatar, ListItemText, Divider
} from '@material-ui/core';
import FollowerAttributes from './FollowerAttributes';

const buildAttrsArray = (followers, following, tweets, likes) => ([
    { title: 'Followers', value: followers },
    { title: 'Following', value: following },
    { title: 'Tweets', value: tweets },
    { title: 'Likes', value: likes }
]);

const FollowersListItem = ({ follower }) => {
    const {
        name,
        screenName,
        followersCount,
        followingCount,
        profileThumbnail,
        tweetsCount,
        likesCount
    } = follower;

    return (
        <Fragment>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={name} src={profileThumbnail} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={(
                        <Fragment>
                            {`@${screenName}`}
                            <FollowerAttributes attributes={buildAttrsArray(followersCount, followingCount, tweetsCount, likesCount)} />
                        </Fragment>
                    )}
                />
            </ListItem>
            <Divider />
        </Fragment>
    );
};

FollowersListItem.propTypes = {
    follower: PropTypes.object
};

export default FollowersListItem;
