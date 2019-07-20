import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        display: 'block',
        flexDirection: 'column'
    },
    item: {
        display: 'flex',
        marginRight: 5
    },
    title: {
        color: '#657786',
        fontWeight: 'bold',
        fontSize: 12,
        marginRight: 8
    },
    value: {
        color: '#1DA1F2',
        fontWeight: 'bold',
        fontSize: 12
    }

};

const FollowerAttributes = ({ attributes, classes }) => (
    <div className={classes.container}>
        {attributes.map(({ title, value }) => (
            <div className={classes.item}>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.value}>
                    {value}
                </div>
            </div>
        ))}
    </div>
);

FollowerAttributes.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.number
    })),
    classes: PropTypes.object
};

export default withStyles(styles)(FollowerAttributes);
