import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../images/bgi1.jpg"
import love from '../images/emoji-smiley.gif'

const Page2 = () => {
  const navigate = useNavigate();
  const onhover = (e) => {
    e.preventDefault();
    navigate("/poem");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        fonstFamily:"roboto sans-serif"
      }}
    >
      <Box
        style={{
          width: "90vw",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="initial" sx={{mt:"20px",marginBottom:"-20px"}}>Birthday Message</Typography>
        <img src={love}></img>
        <Typography variant="h6" color="initial" sx={{mt:"40px"}}>
          Happy Birthday to the most incredible person in my life, my beautiful
          soul!
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Today, on the auspicious occasion of your special day, I want to honor
          not only the amazing person you are but also the spiritual and
          nature-loving side of your being, as well as your deep connection with
          Indian culture. You embody the essence of spirituality, and your love
          for nature and culture is truly inspiring.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          In your presence, I feel a profound sense of tranquility and peace.
          Your spirituality radiates from within, touching the lives of those
          around you. Whether it's through chanting name of Hare Krishna,
          reflection, or simply finding solace in the beauty of nature, you
          embrace the spiritual aspects of life with such grace and sincerity.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Your love for nature is contagious. I've witnessed your eyes light up
          as you immerse yourself in the Grandeur of nature, the serenity of the
          plants of your terrace, the refreshing fragrance of flowers which
          mesmerise the soul and the gentle musical sound of Chirping Birds who
          come daily for their meal on your terrace. Your connection with the
          natural world reminds me of the awe-inspiring wonders that surround us
          and encourages me to appreciate the beauty that lies in every living
          thing.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Moreover, your deep-rooted love for Indian culture shines brightly.
          From the vibrant colors of traditional attire to the enchanting
          melodies of classical Bhajans to the usage of Ayurvedic products, you
          bring the richness of your culture to life. Your passion for the
          intricacies of Indian traditions, festivals, and rituals is a
          testament to your profound appreciation for your heritage. It's truly
          captivating to witness your devotion and reverence towards the
          cultural values that have shaped you.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          On this special day, I want to express my gratitude for your spiritual
          guidance, your unwavering love for nature, and your profound
          connection with Indian culture. You've taught me to embrace the
          spiritual aspects of life, to find solace in nature's embrace, and to
          appreciate the beauty of diverse cultures.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          May this birthday be a celebration of all that you hold dear—your
          spirituality, your love for nature, and your deep connection with
          Indian culture. May your path be illuminated with divine blessings,
          and may the wonders of nature continue to inspire and uplift your
          soul.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Although we may be physically separated by distance today, my love for
          you knows no boundaries and reaches across any distance that separates
          us. On this special day, I want to shower you with all the love,
          warmth, and wishes that my heart can hold.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          From the moment we met, you've brought an extraordinary amount of joy,
          love, and happiness into my life. Your presence has turned my world
          upside down in the most beautiful way, and I am forever grateful for
          the love we share. Despite the miles between us, our connection is
          unbreakable, and I'm constantly reminded of the strength of our bond.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Every day that passes without being able to hold you in my arms feels
          like an eternity, but it only strengthens my determination to make our
          love endure. The distance we face is merely a temporary obstacle that
          will eventually fade away, leaving us with a lifetime of memories and
          adventures to share.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Today, I want to take this opportunity to remind you just how special
          and remarkable you are. Your smile lights up my world, your laughter
          brings music to my ears, and your love fills my heart with an
          indescribable happiness. Your strength, resilience, and unwavering
          belief in us inspire me to become a better person every day.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          As you blow out the candles on your birthday cake, know that each
          flickering flame represents a wish of mine for you. I wish for you to
          find endless joy and fulfillment in every aspect of your life. May
          success and prosperity follow you in every endeavor you pursue. May
          you always be surrounded by love, happiness, and cherished moments
          with your loved ones.
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          Remember, my love, that even though we may be apart physically, we are
          always together in spirit. Distance can't diminish the depth of my
          feelings for you. I promise to continue cherishing you, supporting
          you, and loving you with all my heart until we are reunited once
          again.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" color="initial">
          As we continue our journey together, I promise to support you in
          nurturing your spiritual growth, to explore the beauty of nature by
          your side, and to immerse ourselves in the richness of Indian culture.
          Your passions have become an integral part of our relationship, and I
          cherish the moments we share, whether it's Chanting name of Hare
          Krishna, love for nature(Flower, Birds), embarking on strategizing our
          UPSC goal or celebrating the vibrant traditions of India.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Apke Dil ka tukra,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Jiska Chand sa mukhra,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="inital">
          Jiski pyari si hasi par ap fasin,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Apke Jivan ka pahiya,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Apke Jivan ke Bhanwar ka khewaiya,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Sukh dukh ka sathi,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Pran Pati,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Apka Dil phenk premi,
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          Shubhchintak
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h4" color="initial">
          One and Only The Aman😊😘!
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h3" color="initial">
          Rukiye Jara aur bhi Hai
        </Typography>
        <Button
          variant="outlined"
          onClick={onhover}
          style={{ marginTop: "10px" }}
          sx={{  background: "green", color: "white"  }}
          
        >
            
          Click for Further Surprise
        </Button>
      </Box>
    </div>
  );
};

export default Page2;
