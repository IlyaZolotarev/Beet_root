import React from 'react';
import './Carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImg from './../../../../../../assets/images/carousel-image1.png'
import { carouselContent } from './data';
import NextArrow from './components/NextArrow/NextArrow';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1   
    };
    return (
        <Slider {...settings}>
            {carouselContent.map(({ title, imgLink }, index) => {
                return (
                    <div>
                        <div className="carousel-item">
                            <div className="carousel-item__carousel-img-wrapper">
                                <img src={imgLink} alt="carousel-img"></img>
                            </div>
                            <div className="carousel-item__carousel-info">
                                <p className="carousel-info__goods-name">{title}</p>
                                <button className="carousel-info__button">Shop</button>
                            </div>
                        </div>
                    </div>
                );
            })}

        </Slider>
    );
}

export default Carousel;