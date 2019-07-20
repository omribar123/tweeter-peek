import React from 'react';
import PropTypes from 'prop-types';
import { List, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import STATUS from '../../constants/status.const';
import FollowersListItem from '../FollowersListItem/FollowersListItem2';

const emptyListText = 'No results found, please try again...';
const errorText = 'Something went wrong, please try again...';
const styles = {
    inactive: {
        marginTop: '20%'
    }
};

const FollowersList = ({ followers, state, classes }) => {
    switch (state) {
        case STATUS.NOT_INITIALIZED:
            return null;
        case STATUS.ERROR:
            return <div className={classes.inactive}>{errorText}</div>;
        case STATUS.LOADING:
            return <CircularProgress className={classes.inactive} />;
        default:
            return (
                !followers.length ? <div className={classes.inactive}>{emptyListText}</div> : (
                    <List>
                        {followers.map(follower => <FollowersListItem follower={follower} />)}
                    </List>
                ));
    }
};

FollowersList.propTypes = {
    state: PropTypes.oneOf(Object.values(STATUS)),
    followers: PropTypes.array,
    classes: PropTypes.object
};

FollowersList.defaultProps = {
    followers: []
};

export default withStyles(styles)(FollowersList);
