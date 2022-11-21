import React from "react";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddReactionIcon from '@mui/icons-material/AddReaction';
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
  const [like, setlike] = useState(false)
  return (
    <Stack alignItems={'center'} paddingTop='50px'>
      <Card sx={{ maxWidth: 1000 ,
      }}>
          <CardMedia
            component="img"
             height="500"
            image="../aa.JPG"
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
          <IconButton onClick={()=>{
            setlike(!like)
          }}>
             <ThumbUpIcon color={(like)? "error":""}/>

          </IconButton>
         <FavoriteIcon />
         <AddReactionIcon/>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            comment
          </Button>
        </CardActions>
      </Card>
      
       <Card sx={{ maxWidth: 1000 ,
      }}>
          <CardMedia
            component="img"
             height="500"
            image="../bb.jpg"
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
          <IconButton onClick={()=>{
            setlike(!like)
          }}>
             <ThumbUpIcon color={(like)? "error":""}/>

          </IconButton>
         <FavoriteIcon />
         <AddReactionIcon/>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            comment
          </Button>
        </CardActions>
      </Card>
      <Divider/>
       <Card sx={{ maxWidth: 1000 ,
      }}>
          <CardMedia
            component="img"
             height="500"
            image="../bb.jpg"
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
          <IconButton onClick={()=>{
            setlike(!like)
          }}>
             <ThumbUpIcon color={(like)? "error":""}/>

          </IconButton>
         <FavoriteIcon />
         <AddReactionIcon/>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            comment
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default Home;
