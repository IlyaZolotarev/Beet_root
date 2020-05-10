import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({name, size, color, border, onClick}) => {
    const modify = classNames({
        [`button--size-${size}`]:size,
        [`button--color-${color}`]:color,
        [`button--border-${border}`]:border,
    });

    return (
    <button className={`button ${modify}`} onClick={onClick}>{name}</button>
    );
}

Button.propTypes = {
    name: types.string.isRequired,
    size: types.string.isRequired,
    onClick: types.func,
}

export default Button;