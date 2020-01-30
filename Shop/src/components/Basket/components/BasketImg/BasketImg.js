import React from 'react';
import './BasketImg.scss'
import BasketPng from './../../../../assets/images/basket.png';

const BasketImg = () => {
    return(
        <div className="basket-img-wrapper">
            <img src={BasketPng} alt="basket"></img>
        </div>
    );
}

export default BasketImg;