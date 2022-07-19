import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export function Saludar(props) {
    const { firstname, lastname } = props;

    return (
        <Text>
            Buenos días {firstname} {lastname}
        </Text>
    )
}

Saludar.defaultProps = {
    firstname: 'Sergio',
    lastname: 'López Bautista',
}

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,  
}