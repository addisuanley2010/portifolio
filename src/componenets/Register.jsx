import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState, useContext } from "react";

import { Addisu } from "../App";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  InputAdornment,
  Button,
  TextField,
  Stack,
  Typography,
} from "@mui/material";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  });
  const Aschale = useContext(Addisu);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newValues = { ...values };
    newValues[fieldName] = fieldValue;
    setValues(newValues);
  };

  const handleSubmit = () => {
    if (
      values.username !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.department !== ""
    ) {
      axios.post("http://localhost:3002/register", values).then((res) => {
        if (res.data.error) {
          Aschale.setDialogValue({ description: res.data.error, open: true });
        } else {
          Aschale.setDialogValue({ description: res.data.success, open: true });
          navigate("/login");
          // console.log(Aschale.dialogValue.description)
        }
      });
    } else {
      Aschale.setDialogValue({
        description: "please fill all the fields!",
        open: true,
      });
    }
  };

  return (
    <Stack alignItems={"center"}>
      <Stack
        marginTop={"50px"}
        sx={{
          minWidth: {
            xs: "350px",
            sm: "600px",
          },
          gap: "40px",
        }}
      >
        <Stack alignItems={"center"}>
          <PersonAddIcon
            color="primary"
            sx={{
              height: "100px",
              width: "100px",
            }}
          />

          <Typography color={"primary.light"}> create account</Typography>
        </Stack>
        <TextField
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonAddAltIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          name="email"
          type={"email"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="department"
          value={values.department}
          onChange={handleChange}
          placeholder="department"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          name="password"
          type={"password"}
          helperText="do not share your password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="confirm"
          value={values.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
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
        variant="outlined"
        onClick={handleSubmit}
        sx={{
          marginTop: "60px",
          paddingY: "8px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
          minWidth: {
            xs: "200px",
            sm: "300px",
          },
        }}
      >
        Register
      </Button>
    </Stack>
  );
};

export default Register;
