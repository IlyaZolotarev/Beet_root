import React from 'react';
import './Basket.scss';
import BasketImg from './components/BasketImg/BasketImg';
import TotalPrice from './components/TotalPrice/TotalPrice';
import {TotalAmount} from './data';

const Basket = () => {
    return (
        <div className="basket">
            <BasketImg />
            <TotalPrice price={TotalAmount} />
        </div>
    );
}

export default Basket;