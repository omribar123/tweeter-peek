import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { fetchToken, fetchFollowers, sortList } from './state';
import { AppHeader, Searchbar, AppContent } from './components';
import { STATUS } from './constants';
import './App.css';

class App extends Component {
    componentDidMount() {
        const { authToken, fetchTokenFlow } = this.props;

        if (!authToken) {
            fetchTokenFlow();
        }
    }

    render() {
        const {
            fetchFollowersFlow, listState, followers,
            sortListAction, hasMoreResults, account
        } = this.props;

        return (
            <div className="App">
                <AppHeader title="Twitter Peek" />
                <Container maxWidth="xs">
                    <Searchbar onSearchClick={fetchFollowersFlow} />
                    <AppContent
                        state={listState}
                        followers={followers}
                        onSortList={sortListAction}
                        hasMoreResults={hasMoreResults}
                        onFetchMoreClick={fetchFollowersFlow}
                        account={account}
                    />
                </Container>
            </div>
        );
    }
}

App.propTypes = {
    authToken: PropTypes.string,
    fetchTokenFlow: PropTypes.func,
    fetchFollowersFlow: PropTypes.func,
    sortListAction: PropTypes.func,
    listState: PropTypes.oneOf(Object.values(STATUS)),
    followers: PropTypes.array,
    account: PropTypes.string,
    hasMoreResults: PropTypes.bool
};

const mapStateToProps = ({
    authToken, account, followers, listState, followersCursor
}) => ({
    account,
    followers,
    listState,
    authToken,
    hasMoreResults: followersCursor !== 0
});

const mapDispatchToProps = {
    fetchTokenFlow: fetchToken,
    fetchFollowersFlow: fetchFollowers,
    sortListAction: sortList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
