import React from 'react';
import './Carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselContent } from './data';
import Button from './../../../../../../components/Button/Button';
import GoodsName from './../../../../../../components/GoodsName/GoodsName';

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
                                <GoodsName goodsName={title} />
                                <Button name="Shop" size="s" color="green" />
                            </div>
                        </div>
                    </div>
                );
            })}

        </Slider>
    );
}

export default Carousel;