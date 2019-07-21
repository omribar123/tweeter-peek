import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Button } from '@material-ui/core';
import { SegmentedControl } from 'segmented-control';
import FollowersListItem from '../FollowersListItem/FollowersListItem';
import { SORT_OPTIONS } from '../../constants';

class FollowersList extends Component {
    onShowMore = () => {
        const { account, onFetchMoreClick } = this.props;

        onFetchMoreClick(account);
    };

    render() {
        const { followers, onSortList, hasMoreResults } = this.props;

        return (
            <div>
                <SegmentedControl
                    name="sortFollowersButton"
                    options={SORT_OPTIONS}
                    setValue={onSortList}
                />
                <List>
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

export default FollowersList;
