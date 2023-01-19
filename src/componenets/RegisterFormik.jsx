import React ,{useState,useEffect}from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {  useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Addisu } from "../App";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  InputAdornment,
  Button,
  TextField,
  Stack,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

const RegisterFormik = () => {



  const [imageName, setNmageName] = useState("") // to accept name from file name from end point
  const [selectedImage, setSelectedImage] = useState(null); //to accept from the local file
  const [imageUrl, setImageUrl] = useState(null); //to display


  const validationSchema = yup.object({
    username: yup.string().required().min(3).max(10),
    email: yup.string().required().email(),
    department: yup.string().required().min(3).max(10),
    password: yup.string().required().min(4).max(10),
    confirmPassword: yup.string().required().min(4).max(10),
  });
 
 useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);


 const imageChange = (event) => {
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

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      department: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  const Aschale = useContext(Addisu);
  const navigate = useNavigate();

  

  const handleSubmit = (values) => {
  values.imageName=imageName;
  console.log(values)
    axios.post("http://localhost:3002/register", values).then((res) => {
      if (res.data.error) {
        Aschale.setDialogValue({ description: res.data.error, open: true });
      } else {
        Aschale.setDialogValue({ description: res.data.success, open: true });
        navigate("/login");
      }
    });
  
  };

  return (
    <Stack alignItems={"center"}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          marginTop={"10px"}
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
            value={formik.values.username}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.username)}
            helperText={formik.errors.username}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
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
            value={formik.values.department}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.department)}
            helperText={formik.errors.department}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
            name="password"
            type={"password"}
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
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.confirmPassword)}
            helperText={formik.errors.confirmPassword}
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
          {(!selectedImage&&!imageUrl)?
            <TextField
            placeholder="file"
            onChange={(e)=>imageChange(e)}
            helperText={formik.errors.confirmPassword}
            name="confirmPassword"
            type={"file"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsIcon />
                </InputAdornment>
              ),
            }}
          />:""
          }
          </Stack>
        {(selectedImage&&imageUrl)?
          <Card sx={{ maxWidth: 700 }}>
            <CardMedia
              component="img"
              height="250"
              image={imageUrl}
              alt="adda"
            />    
          </Card>:""}
        <Button
          variant="outlined"
          type="submit"
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
      </form>
    </Stack>
  );
};

export default RegisterFormik;
