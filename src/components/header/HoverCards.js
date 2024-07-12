import React from "react";
import { Box } from "@mui/material";

const commonStyles = {
  height: "340px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "all 0.8s",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
    transition: "background 0.8s",
  },
  "&:hover": {
    transform: "scale(1.1)",
    "&::after": {
      background:
        "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 40%)",
    },
  },
  width: "calc(20%)",
};

const imgStyle1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "160%",
  height: "115%",
  objectFit: "cover",
};
const imgStyle2 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "120%",
  height: "100%",
  objectFit: "cover",
};
const imgStyle3 = {
  position: "absolute",
  top: 0,
  left: -80,
  width: "150%",
  height: "100%",
  objectFit: "cover",
};
const imgStyle4 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "105%",
  objectFit: "cover",
};

const HoverCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "20px",
        mx: 20,
        position: "relative",
        top: "-80px",
        zIndex: 2,
        height: "300px",
      }}
    >
      <Box sx={commonStyles}>
        <img
          src="/assets/images/hover-cards/card-1.png"
          alt="card-1"
          style={imgStyle1}
        />
      </Box>

      <Box sx={commonStyles}>
        <img
          src="/assets/images/hover-cards/card-2.png"
          alt="card-2"
          style={imgStyle2}
        />
      </Box>

      <Box sx={commonStyles}>
        <img
          src="/assets/images/hover-cards/card-3.png"
          alt="card-3"
          style={imgStyle3}
        />
      </Box>

      <Box sx={commonStyles}>
        <img
          src="/assets/images/hover-cards/card-4.png"
          alt="card-4"
          style={imgStyle4}
        />
      </Box>
    </Box>
  );
};

export default HoverCards;
