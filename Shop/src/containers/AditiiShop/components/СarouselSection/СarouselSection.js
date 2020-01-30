import React from 'react';
import './СarouselSection.scss';
import Сarousel from './components/Сarousel/Carousel';

const СarouselSection = () => {
    return(
        <section className="carousel-section">
          <div className="content-container carousel-section__container">
              <Сarousel />
          </div>
        </section>
    );
}

export default СarouselSection;
