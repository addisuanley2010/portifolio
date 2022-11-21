import React from "react";
import {
  InputAdornment,
  Button,
  TextField,
  Stack,
  
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";

const Login = () => {
  return (
    <Stack alignItems={"center"}>
      <Stack
        marginTop={"100px"}
        sx={{
          minWidth: {
            xs: "350px",
            sm: "600px",
          },
          gap: "40px",
        }}
      >
        <Stack         
    alignItems={"center"}>
          <AccountCircle
            color="primary"
            sx={{
              height: "100px",
              width: "100px",
            }}
          />
          login
        </Stack>
        <TextField
          id="username"
          placeholder="username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="password"
          id="password"
          type={"password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Button
        variant="contained"
        sx={{
          marginTop: "60px",
          paddingY: "8px",
          minWidth: {
            xs: "200px",
            sm: "300px",
          },
        }}
      >
        Login
      </Button>
      <Stack direction={"row"} my={"30px"}>
        <Button>
          <Link>Register?</Link>
        </Button>
        {/* <Button >Forget?</Button> */}
      </Stack>
    </Stack>
  );
};

export default Login;
