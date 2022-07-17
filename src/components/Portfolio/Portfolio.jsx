import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Kwikitt from "../../img/KwikittLabs.png";
import Sabzibazaar from "../../img/sabzibazaar.png";
import Finance from "../../img/finance.png";
import youtube from "../../img/youtube.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Working or Worked</span>
      <span>ON</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Kwikitt} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sabzibazaar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Finance} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.youtube.com/channel/UC0Bii0Dic_am8RmTpVyeEug" target="_blank"><img src={youtube} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
