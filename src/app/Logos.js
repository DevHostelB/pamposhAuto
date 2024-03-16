'use client'
import Image from "next/image";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img2 from "../../public/img2.png";

const Logos = () => {

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        }
      }
    ]
  };

  return (
    <>
      <Box
      >
        <Container maxWidth="xl">
          
          <Box className="slider-container" my={5}>
            <Slider {...settings}>
             {[1,2,3,4,5,6].map((item) => (
                <div key={item}>
                  <Box sx={{display: 'flex', justifyContent: 'center'}}><Image alt="img" src={img2} width={100} height={100} /></Box>
                </div>
             ))}

            </Slider>
          </Box>
        </Container>
        
      </Box>
    </>
  );
};

export default Logos;
