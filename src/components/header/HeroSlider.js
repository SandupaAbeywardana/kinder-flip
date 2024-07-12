import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const SliderContainer = styled(Grid)`
  display: flex;
  background: url("/assets/images/home-hero-slider/slide-1.png");
  min-height: calc(100vh - 40px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 50%),
      linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent 50%);
    z-index: 1;
    pointer-events: none;
  }
`;

const HeaderContent = styled(Grid)`
  position: relative;
  z-index: 2;
  margin: 30px 50px;
  display: flex;
  justify-content: space-between;
`;

const iconStyle = {
  color: "#fff",
  fontSize: "1.5rem",
  margin: "0 10px",
};

const menu = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: "bx:bx-home",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    icon: "bx:bx-info-circle",
  },
  {
    id: 3,
    title: "Shop",
    link: "/shop",
    icon: "fluent-mdl2:shop",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
    icon: "bx:bx-news",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",
    icon: "bx:bx-envelope",
  },
];

const MenuWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MenuItem = styled(Box)`
  display: inline-block;
  padding: 10px 50px;
  border-radius: 50px;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  position: absolute;
  left: ${(props) => props.index * 130}px;
  z-index: ${(props) => props.index};
  transition: background-color 0.5s, color 0.5s, border-color 0.5s;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #fff;
  }
`;

const HeroSlider = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <SliderContainer>
      <HeaderContent container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <img src="/assets/images/home-hero-slider/logo.png" alt="slide-1" />
          </Grid>
          <Grid
            item
            xs={6.15}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MenuWrapper>
              {menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <MenuItem
                    index={index}
                    onClick={() => setSelectedMenu(item.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Icon icon={item.icon} />
                    <Typography variant="body2" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </MenuWrapper>
          </Grid>
          <Grid item>
            <Icon icon="ooui:search" style={iconStyle} />
            <Icon icon="fa-regular:user" style={iconStyle} />
            <Icon icon="ph:heart-bold" style={iconStyle} />
            <Icon
              icon="material-symbols:shopping-bag-outline"
              style={iconStyle}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{ color: "#fff", fontSize: "3rem" }}
            style={{
              fontSize: "80px",
              fontWeight: "200",
            }}
          >
            Made For <br />
            <span
              style={{
                fontSize: "110px",
                fontWeight: "717",
              }}
            >
              Magic
            </span>
          </Typography>
        </Grid>
      </HeaderContent>
    </SliderContainer>
  );
};

export default HeroSlider;
