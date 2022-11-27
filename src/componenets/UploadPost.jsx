import { useState, useEffect } from "react";
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

const UploadPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <Box alignItems="center">
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
        gap: "40px",
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
        <TextField placeholder="Title" fullWidth />
        <TextareaAutosize placeholder="Description" minRows={5} />
        
       
      </Box>
<Divider/>

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
            <Typography gutterBottom variant="h5" component="div">
              Addisu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
      <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            <AddAPhotoIcon />
          </Button>
        </label>
    </Stack> 
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
          <Button>Download Cv</Button>
        </Button>
    </Box>
  );
};

export default UploadPost;
