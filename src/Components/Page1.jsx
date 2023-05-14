import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import home from "../images/bgi1.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Page1 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Happy  Birthday Nisha"];
  const period = 2000;
  const navigate = useNavigate();
  const onhover = (e) => {
    e.preventDefault();
    navigate("/BirthdayMessage");
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "bolder",
            fontFamily: "sans-serif",
          }}
        >
          <Typography
            style={{ fontWeight: "bolder", color: "rgb(255, 200, 203" }}
            variant="h1"
            color="initial"
          >
            Happy
          </Typography>
          <Typography
            style={{ fontWeight: "bolder" ,color: "rgb(255, 100, 203)"} }
            variant="h1"
            color="initial"
          >
            Birthday
          </Typography>
          <Typography
            style={{ fontWeight: "bolder" ,color: "rgb(255, 100, 203)" }}
            variant="h1"
            color="initial"
          >
            Nisha
          </Typography>
          
        </Box>
        <Box sx={{ position: "relative", bottom: "0px", height: "10vh",color:"golden" }}>
          <Button
            variant="outlined"
            sx={{backgroundColor:"green",color:"white", "&:hover": { background: "green", color: "white" } }}
            size="large"
            onClick={onhover}
          >
            Click Here for Birthday Message
          </Button>
          <h1>
            
            <span
              className="txt-rotate"
              dataPeriod="1000"
            >
              <span className="wrap">{text} </span>
            </span>
          </h1>
        </Box>
      </Box>
    </>
  );
};

export default Page1;
