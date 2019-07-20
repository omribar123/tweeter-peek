import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { fetchAccount } from './state';
import { AppHeader, Searchbar } from './components';
import './App.css';
import FollowersList from './components/FollowersList/FollowersList';
import STATUS from './constants/status.const';

const App = ({ fetchAccountFlow, listState, followers }) => (
    <div className="App">
        <AppHeader title="Twitter Peek" />
        <Container maxWidth="xs">
            <Searchbar onSearchClick={fetchAccountFlow} />
            <FollowersList
                state={listState}
                followers={followers}
            />
        </Container>
    </div>
);

App.propTypes = {
    fetchAccountFlow: PropTypes.func,
    listState: PropTypes.oneOf(Object.values(STATUS)),
    followers: PropTypes.array
};

const mapStateToProps = ({ account, followers, listState }) => ({
    account,
    followers,
    listState
});

const mapDispatchToProps = {
    fetchAccountFlow: fetchAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
