import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const HeaderBanCol = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px !important;
`;

const HeaderBanText = styled(Typography)`
  font-weight: 450;
  text-align: center;

`;

const HeaderBanner = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        m: 0,
        p: 0,
      }}
    >
      <HeaderBanCol item xs={4} className="header-col">
        <HeaderBanText variant="body2">Love the Flip</HeaderBanText>
      </HeaderBanCol>
      <HeaderBanCol item xs={4} className="header-col">
        <HeaderBanText variant="body2">
          Get A 10% Discount Now: Sign Up For The Newsletter
        </HeaderBanText>
      </HeaderBanCol>
      <HeaderBanCol item xs={4} className="header-col">
        <HeaderBanText variant="body2">Delivery Information</HeaderBanText>
      </HeaderBanCol>
    </Grid>
  );
};

export default HeaderBanner;
