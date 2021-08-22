import React, { useState } from "react";
import "./Slide.css";
import Slider from "react-slick";

import astronaut from '../../images/batiment.jpg'
import celebrating from '../../images/excavator-action.png'
import education from '../../images/group-steel-.png'
import taken from '../../images/close-up-hard-hat-holding-by-construction-worker.jpg'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];
 
const Slide = (props) => { 

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        lazyLoad: true,
        centerPadding: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000, 
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    
      return (
        <div className="App">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div  key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))} 
          </Slider>
        </div>
      );
    }
    

export default Slide
