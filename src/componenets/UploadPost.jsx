import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  Button,
  CardActions,
  CardMedia,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
  TextField,
  Box,
  TextareaAutosize,
  Divider,
} from "@mui/material";
import axios from "axios";
const UploadPost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
const navigate=useNavigate()
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  console.log(imageUrl);

const handleSubmit=()=>{
  const data={
    title:post.title,
    description:post.description,
    image:imageUrl
  }
  axios.post("http://localhost:3001/post", data).then((res) => {
      if (res.data.error) {
       console.log("error")
      } else {
console.log("yesssss!")
      }
    });
    navigate('/home')
}


  return (
    <Box>
      <Stack
        margin={"10px"}
        alignItems="center"
        direction={"row"}
        justifyContent="space-evenly"
        sx={{
          flexDirection: {
            sm: "column",
            xs: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          minWidth: {
            xs: "350px",
            sm: "600px",
          },
          gap: "10px",
        }}
      >
        <TextField
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <Box
          mt={"50px"}
          display="flex"
          flexDirection={"column"}
          sx={{
            minWidth: {
              xs: "350px",
              sm: "600px",
            },
            gap: "40px",
          }}
        >
          <TextField
            value={post.title}
            placeholder="Title"
            fullWidth
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />
          <TextareaAutosize
            value={post.description}
            placeholder="Description"
            minRows={5}
            onChange={(e) => {
              setPost({ ...post, description: e.target.value });
            }}
          />
        </Box>
        <Divider />

        {imageUrl && selectedImage && (
          <Card sx={{ maxWidth: 700 }}>
            <CardMedia
              component="img"
              width="300"
              height="300"
              image={imageUrl}
              alt="adda"
            />
            <CardContent>
              <label htmlFor="select-image">
                <Button color="primary" component="span">
                  <AddAPhotoIcon />
                </Button>
              </label>
              <Typography gutterBottom variant="h5" component="div">
                {/* {post.title} */}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {/* {post.description} */}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => {}}>
                <ThumbUpIcon />
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
        )}
        {!selectedImage && (
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
              <AddAPhotoIcon />
            </Button>
          </label>
        )}
      </Stack>
      <Button
        sx={{
          marginTop: "5%",
          marginLeft: "58%",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
        variant="outlined"
        onClick={handleSubmit}
      >
        Submit Post
      </Button>
    </Box>
  );
};

export default UploadPost;
