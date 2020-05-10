import React from 'react';
import './Slider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderContent } from './data'
import Button from './../../../../../../components/Button/Button'


const SliderBlock = () => {

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        customPaging: i => (
            <div className="nav-btn"
                style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                }}
            >
            </div>
        ),
        appendDots: dots => (
            <div
                style={{
                    bottom: "12px"
                }}
            >
                <ul> {dots} </ul>
            </div>
        ),
    };
    
    return (
        <Slider {...settings}>
            {sliderContent.map(({ title, description, imgLink }, index) => {
                return (
                    <div>
                        <div className="slide-item">

                            <div className="slide-item__slide-img-wrapper">
                                <img src={imgLink} alt="slide-item"></img>
                            </div>
                            <div className="slide-item__slide-info">
                                <p className="slide-info__goods-name">{title}</p>
                                <p className="slide-info__goods-description">{description}</p>
                                <Button name="Shop Now" size="m" color="transparent" border />
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>



    );
}

export default SliderBlock;
