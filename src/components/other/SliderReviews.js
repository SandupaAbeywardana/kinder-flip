import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const SlideStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: "20px",
};

export default function SliderReviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      sx={{
        mx: 50,
        mb: 5,
        mt: 15,
      }}
    >
      <Typography variant="h4" align="center" fontWeight={600}>
        Happy Little Customers
      </Typography>
      <Typography variant="h6" align="center" sx={{ mt: 1, mb: 4 }}>
        Made for Magic
      </Typography>
      <Slider {...settings}>
        <div>
          <Box style={SlideStyle}>
            <Rating value={2} />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              I couldn&apos;t be happier with the KinderFlip potty! It has truly
              transformed the potty training experience for my little one. Thank
              you, KinderFlip!
            </Typography>
            <Typography
              variant="h4"
              align="center"
              fontWeight={600}
              sx={{ mt: 2 }}
            >
              Sarah J
            </Typography>
          </Box>
        </div>
        <div>
          <Box style={SlideStyle}>
            <Rating value={4} />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              KinderFlip has been a game changer for us. It has made potty
              training so much easier and more fun for my little one. I would
              highly recommend it to anyone who is potty training their child.
            </Typography>
            <Typography
              variant="h4"
              align="center"
              fontWeight={600}
              sx={{ mt: 2 }}
            >
              David S
            </Typography>
          </Box>
        </div>
        <div>
          <Box style={SlideStyle}>
            <Rating value={5} />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              I can&apos;t recommend KinderFlip enough! It has made potty
              training so much easier for us. My little one loves it and it has
              made the whole process so much more fun for him.
            </Typography>
            <Typography
              variant="h4"
              align="center"
              fontWeight={600}
              sx={{ mt: 2 }}
            >
              Emma L
            </Typography>
          </Box>
        </div>
      </Slider>
    </Box>
  );
}
