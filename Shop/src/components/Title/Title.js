import React from 'react';
import './Title.scss';

const Title = ({title}) => {
    return(
        <h1 className="section-name">{title}</h1>
    );
}

export default Title;