import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TwitterIcon from '../TwitterIcon';

const styles = {
    icon: {
        fontSize: 28,
        marginRight: 8
    }
};

const AppHeader = ({ title, classes }) => (
    <AppBar position="sticky">
        <Toolbar>
            <TwitterIcon className={classes.icon} />
            <h2>{title}</h2>
        </Toolbar>
    </AppBar>
);

AppHeader.propTypes = {
    title: PropTypes.string,
    classes: PropTypes.object
};

export default withStyles(styles)(AppHeader);
