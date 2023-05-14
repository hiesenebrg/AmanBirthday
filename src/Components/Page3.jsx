import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../images/bgi1.jpg";
import imogis from '../images/kiss-hug.gif'
const Page3 = () => {


  const navigate = useNavigate();
  const onhover = (e) => {
    e.preventDefault();
    
    navigate("/suggestions");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        fonstFamily: "roboto sans-serif",
      }}
    >
      <Typography variant="h4" color="initial" sx={{ m: "20px" }}>
        Poem of Love
      </Typography>
      <Typography variant="body1" color="initial">
        In the realm where souls entwine,
      </Typography>
      <Typography variant="body1" color="initial">
        A love story, truly divine.
      </Typography>
      <Typography variant="body1" color="initial">
        Across the distance, our spirits soar,
      </Typography>
      <Typography variant="body1" color="initial">
        Unbounded by land, forevermore.
      </Typography>
      <br></br>
      <br></br>

      <Typography variant="body1" color="initial">
        In nature's embrace, we find our peace,
      </Typography>
      <Typography variant="body1" color="initial">
        As whispers of trees grant sweet release.
      </Typography>
      <Typography variant="body1" color="initial">
        Beneath the moon's ethereal glow,
      </Typography>
      <Typography variant="body1" color="initial">
        Our love, like rivers, continues to flow.
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="body1" color="initial">
        Your spirit, a flame, radiant and bright,
      </Typography>
      <Typography variant="body1" color="initial">
        Guiding me through each dark night.
      </Typography>
      <Typography variant="body1" color="initial">
        In your eyes, I see galaxies unfold,
      </Typography>
      <br></br>
      <br></br>

      <Typography variant="body1" color="initial">
        With every sunrise, your soul awakes,
      </Typography>
      <Typography variant="body1" color="initial">
        Embracing the beauty each new day makes.
      </Typography>
      <Typography variant="body1" color="initial">
        In every petal, a love story blooms,
      </Typography>
      <Typography variant="body1" color="initial">
        As nature sings, and the heart resumes.
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="body1" color="initial">
        Your love for India, a cherished embrace,
      </Typography>

      <Typography variant="body1" color="initial">
        A culture's heartbeat in every trace.
      </Typography>

      <Typography variant="body1" color="initial">
        Through vibrant colors and traditions old,
      </Typography>

      <Typography variant="body1" color="initial">
        A tapestry of love, forever enfolded.
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="body1" color="initial">
        On your special day, let joy arise,
      </Typography>
      <Typography variant="body1" color="initial">
        As nature's symphony fills the skies.
      </Typography>
      <Typography variant="body1" color="initial">
        May the divine bless your every stride
      </Typography>
      <Typography variant="body1" color="initial">
        And grace your path with love's pure
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="body1" color="initial"></Typography>
      <Typography variant="body1" color="initial"></Typography>
      <Typography variant="body1" color="initial"></Typography>
      <Typography variant="body1" color="initial"></Typography>
      <br></br>
      <br></br>
      <Typography variant="body1" color="initial">
        My love, together we'll wander free,
      </Typography>
      <Typography variant="body1" color="initial">
        Exploring the depths of eternity.
      </Typography>
      <Typography variant="body1" color="initial">
        In this sacred union, forever entwined
      </Typography>
      <Typography variant="body1" color="initial">
        Two souls, spiritual and love-defined.
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="body1" color="initial">
        Happy birthday, my love, my guiding light,
      </Typography>
      <Typography variant="body1" color="initial">
        A celestial force, forever in flight.
      </Typography>
      <Typography variant="body1" color="initial">
        With nature's grace and India's embrace,
      </Typography>
      <Typography variant="body1" color="initial">
        Our love, a testament, in every space.
      </Typography>
      <br></br>
      <br></br>
      <img src={imogis}></img>
      <Button
        variant="outlined"
        onClick={onhover}
        
        sx={{backgroundColor:"red",color:"white",mt:"10px", "&:hover": { background: "green", color: "white" } }}
      >
        Click here for more surprise
      </Button>
      

    </Box>
  );
};

export default Page3;
