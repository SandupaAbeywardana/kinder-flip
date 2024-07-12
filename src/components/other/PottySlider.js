import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";

const SlideStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const addToCartButton = {
  backgroundColor: "white",
  color: "#3C3A3A",
  border: "6px solid #3C3A3A",
  fontWeight: "bold",
  padding: "10px 30px",
  borderRadius: "30px",
  cursor: "pointer",
  margin: "10px",
};

const buyNowButton = {
  backgroundColor: "#3C3A3A",
  color: "white",
  border: "6px solid white",
  boxShadow: "0px 10px 44px 0px rgba(106, 105, 104, 0.4)",
  fontWeight: "bold",
  padding: "10px 40px",
  borderRadius: "30px",
  cursor: "pointer",
  margin: "10px",
};

const SliderControlButtonRight = {
  backgroundColor: "none",
  color: "black",
  border: "none",
  fontWeight: "bold",
  padding: "10px 30px",
  borderRadius: "30px",
  cursor: "pointer",
  margin: "10px",
  position: "absolute",
  right: "31%",
  top: "-250%",
  fontSize: "30px",
};

const SliderControlButtonLeft = {
  backgroundColor: "none",
  color: "black",
  border: "none",
  fontWeight: "bold",
  padding: "10px 30px",
  borderRadius: "30px",
  cursor: "pointer",
  margin: "10px",
  position: "absolute",
  left: "31%",
  top: "-250%",
  fontSize: "30px",
};

export default function PottySlider() {
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        mb: 10,
        mt: 10,
        mx: 5,
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Box style={SlideStyle}>
            <img
              src="/assets/images/slider/slide-1.png"
              alt="slide-1"
              style={imageStyle}
            />
          </Box>
        </div>
        <div>
          <Box style={SlideStyle}>
            <img
              src="/assets/images/slider/slide-2.png"
              alt="slide-2"
              style={imageStyle}
            />
          </Box>
        </div>
        <div>
          <Box style={SlideStyle}>
            <img
              src="/assets/images/slider/slide-3.png"
              alt="slide-3"
              style={imageStyle}
            />
          </Box>
        </div>
      </Slider>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography onClick={previousSlide} style={SliderControlButtonLeft}>
          {"<"}
        </Typography>
        <Typography onClick={nextSlide} style={SliderControlButtonRight}>
          {">"}
        </Typography>
        <Box>
          <button style={addToCartButton}>Add to Cart</button>
          <button style={buyNowButton}>Buy Now</button>
        </Box>
      </Box>
    </Box>
  );
}
