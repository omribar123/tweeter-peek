import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { SegmentedControl } from 'segmented-control';
import FollowersListItem from '../FollowersListItem/FollowersListItem';
import { SORT_OPTIONS } from '../../constants';

const styles = {
    container: {
        width: '100%'
    },
    sortPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10
    },
    sortLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#657786'
    },
    sortButtons: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1DA1F2',
        borderRadius: 14
    },
    list: {
        maxHeight: '70vh',
        overflowY: 'scroll'
    }
};

class FollowersList extends Component {
    onShowMore = () => {
        const { account, onFetchMoreClick } = this.props;

        onFetchMoreClick(account);
    };

    render() {
        const {
            followers, onSortList, hasMoreResults, classes
        } = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.sortPanel}>
                    <span className={classes.sortLabel}>SORT-BY</span>
                    <SegmentedControl
                        className={classes.sortButtons}
                        name="sortFollowersButton"
                        options={SORT_OPTIONS}
                        setValue={onSortList}
                        style={{ width: '40%', margin: '0 0 0 10px' }}
                    />
                </div>
                <List className={classes.list}>
                    {followers.map(follower => <FollowersListItem key={follower.id} follower={follower} />)}
                </List>
                {hasMoreResults ? (
                    <Button onClick={this.onShowMore}>
                        SHOW MORE
                    </Button>
                ) : null}
            </div>
        );
    }
}

FollowersList.propTypes = {
    classes: PropTypes.object,
    followers: PropTypes.array,
    onSortList: PropTypes.func,
    onFetchMoreClick: PropTypes.func,
    hasMoreResults: PropTypes.bool,
    account: PropTypes.string
};

FollowersList.defaultProps = {
    onSortList: () => {},
    hasMoreResults: false
};

export default withStyles(styles)(FollowersList);
