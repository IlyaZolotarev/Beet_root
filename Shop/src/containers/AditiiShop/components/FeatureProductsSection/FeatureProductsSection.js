import React from 'react';
import './FeatureProductsSection.scss';
import FeatureProducts from './components/FeatureProducts/FeatureProducts';

const FeatureProductsSection = () => {
    return (
        <section className="feature-products">
            <div className="content-container feature-products__container">
                <FeatureProducts />
            </div>
        </section>
    );
}

export default FeatureProductsSection;