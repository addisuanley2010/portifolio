import {
  Stack,
  Button,
  Card,
  CardMedia,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/admin").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const addisu = users.map((user) => {
    return (
      <Card key={user.id}>
        <Avatar
          sx={{
            height: "140px",
            width: "140px",
          }}
        >
          <CardMedia
            component="img"
            image={require(`../assets/${user.image}`)}
            alt={user.username}
          />
          <CardMedia />
        </Avatar>
        <Typography>
          name <Link>{user.username}</Link>
          <br />
          email<Link> {user.email}</Link>
          <br />
          department<Link> {user.department}</Link>
          <br />
        </Typography>
        <br />
        <Button
          variant="outlined"
          size="small"
          onClick={() => deleteUser(user.id)}
          sx={{
            height:"30px",
            color:"red",
            borderColor:"red"
          }}
        >
          delete
        </Button>
        &nbsp;&nbsp;&nbsp;
        {user.statuss==="true"?
        <Button
         sx={{
            height:"30px",
           
          }}
          variant="outlined"
          size="small"
          onClick={() => updateUser(user.id,"false")}
        >
          block
        </Button>:
         <Button
          sx={{
            height:"30px",
          
          }}
          variant="outlined"
          size="small"
          onClick={() => updateUser(user.id,"true")}
        >
          unblock
        </Button>}
      </Card>
    );
  });

  const updateUser = (id,status) => {
    const statuss={statuss:status}
    axios.put(`http://localhost:3002/admin/${id}`,statuss).then((res) => {
      alert(res.data);
      console.log(statuss)
    }); 
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3002/admin/${id}`).then((res) => {
      alert(res.data);
    });
  };
  return (
    <Stack display={"flex"} flexDirection="row" gap={4}>
      {addisu}
    </Stack>
  );
};

export default Admin;
