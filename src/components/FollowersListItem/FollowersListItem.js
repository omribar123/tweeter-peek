/* eslint-disable camelcase,no-unused-vars */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    ListItem, ListItemAvatar, Avatar, ListItemText, Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FollowerAttributes from './FollowerAttributes';

const styles = {

};

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
        description,
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
                    secondary={`@${screenName}${description ? ` - ${description}` : ''}`}
                />
                <FollowerAttributes attributes={buildAttrsArray(followersCount, followingCount, tweetsCount, likesCount)} />
            </ListItem>
            <Divider />
        </Fragment>
    );
};

FollowersListItem.propTypes = {
    follower: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(FollowersListItem);
