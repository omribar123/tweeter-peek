import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Searchbar extends Component {
    state = {
        term: ''
    };

    onSubmit = (e) => {
        const { term } = this.state;
        const { onSearchClick } = this.props;

        e.preventDefault();
        onSearchClick(term);
        this.setState({ term: '' });
    };

    onInputChange = e => this.setState({ term: e.target.value });

    render() {
        const { term } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <Paper>
                    <Input
                        placeholder="Enter a user account"
                        type="text"
                        onChange={this.onInputChange}
                        endAdornment={(
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )}
                        value={term}
                        autoFocus
                    />
                </Paper>
            </form>
        );
    }
}

Searchbar.propTypes = {
    onSearchClick: PropTypes.func
};
Searchbar.defaultProps = {
    onSearchClick: (x) => { console.log(x); }
};

export default Searchbar;
