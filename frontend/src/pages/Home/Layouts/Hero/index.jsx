import React from 'react'
import { HeroContainer } from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import headerSlider1 from "./../../../../assets/images/headerSlider-1.jpg"
import headerSlider2 from "./../../../../assets/images/headerSlider-2.jpg"

const Hero = () => {
  return (
    <HeroContainer>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={headerSlider1} alt="headerSlide1" />
          <div className="title-content">
            <h1>Creative Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
            <button><a href="/">Get Started</a></button>
            <button><a href="/">Download</a></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={headerSlider2} alt="headerSlide2" />
          <div className="title-content">
            <h1>Modern Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
            <button><a href="/">Get Started</a></button>
            <button><a href="/">Download</a></button>
          </div>
        </SwiperSlide>
      </Swiper>
    </HeroContainer>
  )
}

export default Hero