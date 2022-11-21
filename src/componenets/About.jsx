import {
  Stack,
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack justifyContent="center">
      <Card
        sx={{
          maxWidth: 400,
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <CardMedia
          component="img"
          alt="addisu anley"
          height="400"
          image="../aa.JPG"
        />
        <CardContent>
          <Typography variant="body1" component="span">
            Addisu Anley
          </Typography>
        </CardContent>
      </Card>
      <Divider
        sx={{
          height: "45px",
        }}
      />
      <Stack
        direction="row"
        justifyContent="center"
        spacing={"50px"}
        sx={{
          paddingTop: "100px",
        }}
      >
        <Card
          postion="absolute"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },

            maxWidth: 400,
          }}
        >
          <CardMedia
            component="img"
            alt="addisu anley"
            height="400"
            image="../aa.JPG"
          />
          <CardContent>
            <Typography variant="body1" component="span">
              Addisu Anley
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 900 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am Addisu Anley . I'm fresh frontend web developer. and
              currently, I'm studying Software engineering at Bahir Dar
              University, bahir dar institute of technology
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                marginTop: "30%",
                marginLeft: "70%",
              }}
              variant="outlined"
            >
              <Button>
                <a
                  href="https://drive.google.com/file/d/1V8AqDbYKE6hlLv-i73rc1cjpRSSOKakF/view?usp=sharing"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  Download Cv
                </a>
              </Button>
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
};

export default About;
