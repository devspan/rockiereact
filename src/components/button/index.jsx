import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';


Button.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
};

function Button(props) {
    const {title , path } = props;
    return (
        <a href={path} className="btn-action"><span>{title}</span></a>
    );
}

export default Button;
