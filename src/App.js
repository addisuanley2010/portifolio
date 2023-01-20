import Navbar from './componenets/Navbar';
// import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import jwtDecode from 'jwt-decode'
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Stack,
} from "@mui/material";

export const Addisu = createContext()

function App() {
  const [id, setId] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [username, setUsername] = useState("")
  const [dialogValue, setDialogValue] = useState({
    open: false,
    description: '',
  })
const [roll, setRoll] = useState("")
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    // axios.get("http://localhost:3002/login", {
    //   headers: {
    //     accessToken: sessionStorage.getItem("accessToken"),
    //   }
    // }).then((res) => {
    //   if (res.data.error) {
    //     setDisplay(false)
    //   }
    //   else {
    //     setUsername(res.data.username)
    //    setId(res.data.id)
    //    setProfileImage(res.data.image)

    //     setDisplay(true)
    //   }
    // })
    const token = sessionStorage.getItem("accessToken")
    if (token) {
      const user = jwtDecode(token)
      if (!user) {
        setDisplay(false)
      }
      else {

        setUsername(user.username)
        setId(user.id)
        setProfileImage(user.image)
        setRoll(user.roll)
        setDisplay(true)

      }
    }
    else{ 
      setDisplay(false)
    }
  }, [display,roll])



  const handleClose = () => {
    setDialogValue({ ...dialogValue, open: false });
  };

  return (

    <Stack>
      <Addisu.Provider value={{
        profileImage: profileImage,
        open: dialogValue.open,
        description: dialogValue.description,
        setDialogValue: setDialogValue,
        display: display,
        setDisplay: setDisplay,
        username: username,
        setUsername: setUsername,
        uid: id,
        roll:roll

      }}>

        <Navbar />
      </Addisu.Provider>
      <Dialog open={dialogValue.open} onClose={handleClose}>
        <DialogTitle>Notice!</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogValue.description} </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>

    </Stack>
  );
}

export default App;
