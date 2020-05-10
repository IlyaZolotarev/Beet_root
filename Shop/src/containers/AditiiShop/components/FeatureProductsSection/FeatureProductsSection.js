import React from 'react';
import './FeatureProductsSection.scss';
import FeatureProduct from './components/FeatureProduct/FeatureProduct';
import Title from './../../../../components/Title/Title';

//data 
import {products} from './data';

const FeatureProductsSection = () => {
    return (
        <section className="feature-products">
            <Title title="Featured Products"/>
            <div className="content-container feature-products__container">
            <div className="feature-products__products-wrapper">
                {products.map(({imgLink, title, price}, index)=>{
                    return(
                        <FeatureProduct imgLink={imgLink} title={title} price={price} key={index} />
                    );
                })}
                </div>
            </div>
        </section>
    );
}

export default FeatureProductsSection;