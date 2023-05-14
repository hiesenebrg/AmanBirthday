import React from "react";
import styled from "styled-components";
import imag1 from "../images/1.JPG";
import imag2 from "../images/2.JPG";
import imag3 from "../images/3.JPG";
import imag4 from "../images/4.JPG";
import love from "../images/giphy.gif";
import imag5 from "../images/5.jpg";
import imag6 from "../images/6.jpg";
import imag7 from "../images/7.jpg";
import imag8 from "../images/8.jpg";
import imag9 from "../images/9.jpg";
import imag10 from "../images/10.jpg";
import imag11 from "../images/11.jpg";
import imag12 from "../images/12.jpg";
import imag13 from "../images/13.jpg";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import image from "../images/bgi1.jpg";

const Page4 = ({ images }) => {
  return (
    <>
      <div
        style={{
          margin: "auto",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          fonstFamily: "roboto sans-serif",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80vw",
            margin: "auto",
          }}
        >
          <Typography variant="h3" color="initial" sx={{ m: "80px" }}>
            Some Suggestion from my side 😊
          </Typography>
          <Typography variant="h5" color="initial">
            May God give you strength to overcome all your weaknesses, Never let
            your external circumstances overshadow youe inner potential and
            shatter you, God has given you a lot, try to utilise it, respect it.
            <br></br>
            <br></br> Find the right source, You have much to do for our nation,
            you can't Stop inbetween your journey, Keep working on yourself, for
            your dream, keep evolving. <br></br>
            <br></br>You have everything which is required to become a good
            officer, politician and inspiration for others!
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            sx={{ fontWeight: "bolder", m: "10px" }}
          >
            Respect it!
          </Typography>
        </Box>
        <PhotoGallery>
          <Image src={imag1}></Image>
          <Image src={imag2}></Image>
          <Image src={imag3}></Image>
          <Image src={imag4}></Image>
          <Image src={imag5}></Image>
          <Image src={imag6}></Image>
          <Image src={imag7}></Image>
          <Image src={imag8}></Image>
          <Image src={imag9}></Image>
          <Image src={imag10}></Image>
          <Image src={imag11}></Image>
          <Image src={imag12}></Image>
          <Image src={imag13} style={{width:"100vw",height:"20vh"}}></Image>
        </PhotoGallery>
        <img src={love} style={{ width:"100vw"}}></img>
      </div>
    </>
  );
};

export default Page4;

const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -10px;
`;

const Image = styled.img`
  width: calc(33.33% - 20px);
  height: auto;
  margin: 10px;
  object-fit: cover;
`;
