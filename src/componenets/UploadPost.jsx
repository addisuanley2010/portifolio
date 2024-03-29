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

  const [imageName, setNmageName] = useState("") // to accept name from file name from end point
  const [selectedImage, setSelectedImage] = useState(null); //to accept from the local file
  const [imageUrl, setImageUrl] = useState(null); //to display temorarly on browser
  const navigate=useNavigate()

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);




const handleSubmit=()=>{
  const data={
    title:post.title,
    description:post.description,
    image:imageName
  }
  if(imageName){
  axios.post("http://localhost:3002/post", data,{
     headers:{
      accessToken:sessionStorage.getItem("accessToken"),
    }
  }).then((res) => {
      if (res.data.error) {
       alert(res.data.error)
      } else {
        alert('successfully posted')
    navigate('/home')

      }
    });
  }else{
    alert("pick image first")
  }
}




 const handleChange = (event) => {
  setSelectedImage(event.target.files[0])
   
    const formdata = new FormData();
    formdata.append('avatar', event.target.files[0]);
    axios.post("http://localhost:3002/insertToFolder", formdata, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then((res) => {
        setNmageName(res.data.image)
      })
      event.preventDefault()

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
          onChange={(e)=>handleChange(e)}
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
              </Typography>

              <Typography variant="body2" color="text.secondary">
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
