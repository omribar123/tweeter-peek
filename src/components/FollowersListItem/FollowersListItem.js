/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardContent, CardHeader, Avatar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FollowerAttributes from './FollowerAttributes';

const styles = {
    header: {
        padding: 0
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0
    },
    countersContainer: {
        display: 'flex',
        alignContent: 'space-around'
    }
};

const buildAttrsArray = (followers_count, friends_count, statuses_count, favorite_count) => ([
    { title: 'Followers', value: followers_count },
    { title: 'Following', value: friends_count },
    { title: 'Tweets', value: statuses_count },
    { title: 'Likes', value: favorite_count }
]);

const FollowersListItem = ({ follower, classes }) => {
    const {
        name, screen_name, description, followers_count,
        friends_count, profile_image_url, statuses_count, favorite_count
    } = follower;
    return (
        <Card>
            <CardHeader
                className={classes.header}
                avatar={<Avatar alt={name} src={profile_image_url} />}
                title={name}
                subheader={`@${screen_name}`}
            />
            <CardContent className={classes.content}>
                <div>{description}</div>
                <FollowerAttributes attributes={buildAttrsArray(followers_count, friends_count, statuses_count, favorite_count)} />
            </CardContent>
        </Card>
    );
};

FollowersListItem.propTypes = {
    follower: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(FollowersListItem);
