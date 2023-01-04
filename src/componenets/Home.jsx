import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useState, useContext, useEffect } from "react";
import { Addisu } from "../App";

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
  Divider,
} from "@mui/material";

const Home = () => {
  const [like, setlike] = useState(false);

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/post")
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [like]);

  const Aschale = useContext(Addisu);

  const handleComment = (postId) => {
    alert(`the comment is unavailable temporarly${postId}`);
  };

  const handleLike = (postId) => {
    axios
      .post(
        "http://localhost:3002/like",
        { postId: postId },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          // alert(res.data.error);
        } else {
          setlike(!like);
          console.log(res.data.userId);
        }
      });
  };

  return (
    <Stack alignItems={"center"} paddingTop="50px">
      {post.map((values, key) => {
        return (
          <>
            <Card sx={{ maxWidth: 1000, minWidth: 1000 }} key={key}>
              <CardMedia
                component="img"
                height="500"
                image={require(`../assets/${values.image}`)}
                alt="image not found"
              />
              <CardContent>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary.dark"
                  >
                    {values.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="primary.light"
                  >
                    posted by: {values.username}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="secondary">
                  {values.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() => {
                    handleLike(values.id);
                  }}
                >
                  {Aschale.uid === values.userId ? (
                    <ThumbUpIcon color="error" />
                  ) : (
                    <ThumbUpIcon color="" />
                  )}

                  {values.likes}
                </IconButton>
                <FavoriteIcon />
                <AddReactionIcon />
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    handleComment(values.userId);
                  }}
                >
                  comment
                </Button>
              </CardActions>
            </Card>
            <Divider
              sx={{
                height: "50px",
              }}
            />
          </>
        );
      })}
    </Stack>
  );
};

export default Home;
