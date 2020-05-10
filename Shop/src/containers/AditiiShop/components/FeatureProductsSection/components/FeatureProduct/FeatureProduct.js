import React, { useState } from 'react';
import './FeatureProduct.scss';
import Button from '../../../../../../components/Button/Button';
import GoodsName from '../../../../../../components/GoodsName/GoodsName';




const FeatureProduct = ({ imgLink, title, price }) => {

    

    return (
        <div className="feature-product__product">
            <div className="product__img-wrapper">
                <img src={imgLink} alt="feature product"></img>
            </div>
            <GoodsName goodsName={title} />
            <div className="product__buy-block">
                <Button name="Buy Now" size="s" color="green"/>
            </div>
        </div>
    );
}

export default FeatureProduct;