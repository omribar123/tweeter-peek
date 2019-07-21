import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Input, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    form: {
        marginTop: 12,
        width: '100%'
    },
    input: {
        height: 40,
        padding: '0 10px'
    }
};

class Searchbar extends Component {
    state = {
        term: ''
    };

    onSubmit = (e) => {
        const { term } = this.state;
        const { onSearchClick } = this.props;

        e.preventDefault();
        if (term && term.length) {
            onSearchClick(term);
        }
    };

    onInputChange = e => this.setState({ term: e.target.value });

    render() {
        const { classes } = this.props;
        const { term } = this.state;

        return (
            <form
                className={classes.form}
                onSubmit={this.onSubmit}
            >
                <Paper>
                    <Input
                        className={classes.input}
                        placeholder="Enter a user account..."
                        type="text"
                        onChange={this.onInputChange}
                        endAdornment={(
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )}
                        value={term}
                        autoFocus
                        fullWidth
                    />
                </Paper>
            </form>
        );
    }
}

Searchbar.propTypes = {
    onSearchClick: PropTypes.func,
    classes: PropTypes.object
};
Searchbar.defaultProps = {
    onSearchClick: () => { }
};

export default withStyles(styles)(Searchbar);
