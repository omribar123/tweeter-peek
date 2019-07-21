import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { STATUS } from '../../constants';
import FollowersList from '../FollowersList/FollowersList';

const emptyListText = 'No results found, please try again...';
const errorText = 'Something went wrong, please try again...';
const styles = {
    inactive: {
        marginTop: '20%'
    }
};

const AppContent = ({
    followers, state, classes, onSortList,
    hasMoreResults, onFetchMoreClick, account
}) => {
    switch (state) {
        case STATUS.NOT_INITIALIZED:
            return null;
        case STATUS.ERROR:
            return <div className={classes.inactive}>{errorText}</div>;
        case STATUS.LOADING:
            return <CircularProgress className={classes.inactive} />;
        default:
            return (
                followers.length ? (
                    <FollowersList
                        followers={followers}
                        onSortList={onSortList}
                        hasMoreResults={hasMoreResults}
                        onFetchMoreClick={onFetchMoreClick}
                        account={account}
                    />
                )
                    : <div className={classes.inactive}>{emptyListText}</div>);
    }
};

AppContent.propTypes = {
    state: PropTypes.oneOf(Object.values(STATUS)),
    followers: PropTypes.array,
    classes: PropTypes.object,
    onSortList: PropTypes.func,
    onFetchMoreClick: PropTypes.func,
    hasMoreResults: PropTypes.bool,
    account: PropTypes.string
};

AppContent.defaultProps = {
    followers: []
};

export default withStyles(styles)(AppContent);
