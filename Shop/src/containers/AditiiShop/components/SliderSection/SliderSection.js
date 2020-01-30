import React from 'react';
import './SliderSection.scss';
import SliderBlock from './components/Slider/Slider';

const SliderSection = () => {
    return(
        <section className="slider-section">
          <div className="content-container slider-section__container">
              <SliderBlock />
          </div>
        </section>
    );
}

export default SliderSection;
