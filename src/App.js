import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TimelineMax } from 'gsap';
import { fetchToken, fetchFollowers, sortList } from './state';
import { AppHeader, Searchbar, AppContent } from './components';
import { STATUS } from './constants';

const styles = {
    app: {
        backgroundColor: '#F7F9FA',
        height: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#004267',
        fontSize: 37,
        fontStyle: 'italic',
        fontWight: 900
    },
    searchPanel: {
        width: '100%',
        marginTop: 15
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.searchTitleContainer = React.createRef();
    }

    componentDidMount() {
        const { authToken, fetchTokenFlow } = this.props;

        if (!authToken) {
            fetchTokenFlow();
        }
    }

    onSearchClick = (term) => {
        const { fetchFollowersFlow } = this.props;

        const myTween = new TimelineMax({ onComplete: () => fetchFollowersFlow(term) });
        myTween
            .addLabel('searchPanel')
            .to(this.searchTitleContainer.current, 0.7, { opacity: 0, height: 0 }, 'searchPanel');
    };

    render() {
        const {
            fetchFollowersFlow, listState, followers,
            sortListAction, hasMoreResults, account, classes
        } = this.props;

        return (
            <div className={classes.app}>
                <AppHeader title="Twitter Peek" />
                <Container maxWidth="sm" className={classes.container}>
                    <div className={classes.searchPanel}>
                        {listState === STATUS.NOT_INITIALIZED ? <div ref={this.searchTitleContainer} className={classes.title}>Find your twitter followers</div> : null}
                        <Searchbar onSearchClick={this.onSearchClick} />
                    </div>
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
    classes: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
