/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/app/globals.css";



const ImageSlider = ({ slides }) => {
  return (
    <Carousel
      showArrows={true}
      className="main-slider"
      autoPlay={true}
      interval={1000}
      infiniteLoop={true}
    >
      {slides.map((slide, index) => (

        <div key={index} className=" h-[300px] object-cover object-[60% 40%] lg:h-[450px]">
                  <img src={slide.src} alt={slide.alt}  />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

