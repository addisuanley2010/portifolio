import React from "react";
import { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddReactionIcon from "@mui/icons-material/AddReaction";

import axios from "axios";
import {
  Button,
  CardActions,
  CardMedia,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";

const Home = () => {
  const [like, setlike] = useState(false);

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/post")
      .then((response) => {
        setPost(response.data);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Stack alignItems={"center"} paddingTop="50px">
      {post.map((values,key) => {
        return(
          <Card sx={{ maxWidth: 1000 }} key={key}>
            <CardMedia
              component="img"
              height="500"
              image={values.image}
              alt="image not found"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {values.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {values.description}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={() => {
                  setlike(!like);
                }}
              >
                <ThumbUpIcon color={like ? "error" : ""} />
              </IconButton>
              <FavoriteIcon />
              <AddReactionIcon />
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                comment
              </Button>
            </CardActions>
          </Card>

        );
      })}
    </Stack>
  );
};

export default Home;
