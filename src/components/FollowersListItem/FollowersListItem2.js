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

const buildAttrsArray = (followers_count, friends_count, statuses_count, favourites_count) => ([
    { title: 'Followers', value: followers_count },
    { title: 'Following', value: friends_count },
    { title: 'Tweets', value: statuses_count },
    { title: 'Likes', value: favourites_count }
]);

const FollowersListItem = ({ follower, classes }) => {
    const {
        name, screen_name, description, followers_count,
        friends_count, profile_image_url, statuses_count, favourites_count
    } = follower;

    return (
        <Fragment>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={name} src={profile_image_url} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={`@${screen_name}${description ? ` - ${description}` : ''}`}
                />
                <FollowerAttributes attributes={buildAttrsArray(followers_count, friends_count, statuses_count, favourites_count)} />
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
