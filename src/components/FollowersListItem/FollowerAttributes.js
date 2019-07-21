import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    item: {
        display: 'flex',
        marginRight: 7
    },
    title: {
        color: '#657786',
        fontWeight: 'bold',
        fontSize: 12,
        marginRight: 4
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
            <div key={`${title}_${value}`} className={classes.item}>
                <div className={classes.title}>
                    {`${title}:`}
                </div>
                <div className={classes.value}>
                    <NumberFormat
                        value={value}
                        displayType="text"
                        thousandSeparator
                    />
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
