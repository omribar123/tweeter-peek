import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';

const AppHeader = ({ title }) => (
    <AppBar position="sticky">
        <Toolbar>
            <h2>{title}</h2>
        </Toolbar>
    </AppBar>
);

AppHeader.propTypes = {
    title: PropTypes.string
};

export default AppHeader;
