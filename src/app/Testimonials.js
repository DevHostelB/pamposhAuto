'use client'
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";

import person from "@/../public/person.png";
import { Colors } from "@/styles/constants";
import { testimonials } from "@/util/Datas/testimonialsData";

const Testimonials = () => {
  const islg = useMediaQuery("(min-width:1200px)");

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
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
            <Typography my={6} variant="h3" sx={{textAlign: 'center'}}>Testimonials</Typography>
            <Slider {...settings}>
             {testimonials.map((item) => (
                <Box key={item}>
                <Stack sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40vh'}}>
                    <Paper elevation={2}>
                    <Box px={3} py={2} sx={{backgroundColor: 'white', borderRadius: 5, width: '300px'}}>
                      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Image alt="img" src={person} width={50}/>
                      </Box>
                      <Box my={1}>
                        <Typography variant="body2">{item.description}</Typography>
                        <Typography variant="h6">{item.name}</Typography>
                        <Rating name="half-rating" defaultValue={item.rating} />
                      </Box>   
                    </Box>
                    </Paper>
                </Stack>
              </Box>
             ))}

            </Slider>
          </Box>
        </Container>
        <Box my={5} sx={{display: 'flex', justifyContent: 'center'}}>
          {/* <Link href="/"> */}
            <Button variant="contained" sx={{backgroundColor: Colors.yellow, color: Colors.dark}}>View All</Button>
          {/* </Link> */}
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
