import {
  Stack,
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack
      justifyContent="center"
      sx={{
        paddingTop: "80px",
        gap: "50px",
        flexDirection: {
          sm: "column",
          xs: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
      }}
    >
      <Card
        sx={{
          "&:hover": {
            color: "primary.light",
          },
        }}
      >
        <CardMedia
          component="img"
          alt="addisu anley"
          height="300"
          image="../aa.JPG"
        />
        <CardContent>
          <Typography variant="body1" component="span">
            Addisu Anley
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          maxWidth: 900,
          "&:hover": {
            color: "primary.light",
          },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About me
          </Typography>
          <Typography variant="body1">
            I am Addisu Anley . I'm fresh frontend web developer. and currently,
            I'm studying Software engineering at Bahir Dar University, bahir dar
            institute of technology
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              marginTop: "15%",
              marginLeft: "58%",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
            variant="outlined"
          >
            <Button>
              <a
                href="https://drive.google.com/file/d/1V8AqDbYKE6hlLv-i73rc1cjpRSSOKakF/view?usp=sharing"
                style={{ textDecoration: "none" }}
              >
                Download Cv
              </a>
            </Button>
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default About;
