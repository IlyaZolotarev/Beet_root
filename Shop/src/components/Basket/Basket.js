import React from 'react';
import './Basket.scss';
import BasketImg from './components/BasketImg/BasketImg';
import TotalAmount from './components/TotalAmount/TotalAmount';

const Basket = () => {
    return (
        <div className="basket">
            <BasketImg />
            <TotalAmount />
        </div>
    );
}

export default Basket;