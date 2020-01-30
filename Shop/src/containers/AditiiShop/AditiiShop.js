import React from 'react';
import './AditiiShop.scss'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HeaderSection from './components/HeaderSection/HeaderSection';
import NavbarSection from './components/NavbarSection/NavbarSection';
import SliderSection from './components/SliderSection/SliderSection';
import CarouselSection from './components/СarouselSection/СarouselSection';
import FeatureProductsSection from './components/FeatureProductsSection/FeatureProductsSection';


const AditiiShop = () => {
    return (
        <div>
            <HeaderSection />
            <NavbarSection />
            <SliderSection />
            <CarouselSection />
            <FeatureProductsSection />
        </div>
    );
}

export default AditiiShop;