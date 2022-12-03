import Navbar from './componenets/Navbar';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
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
  const [username, setUsername] = useState("")
  const [dialogValue, setDialogValue] = useState({
    open: false,
    description: '',
  })

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3002/login", {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      }
    }).then((res) => {
      if (res.data.error) {
        setDisplay(false)
      }
      else {
        setUsername(res.data.username)
       setId(res.data.id)

        setDisplay(true)
      }
    })

  })



  const handleClose = () => {
    setDialogValue({ ...dialogValue, open: false });
  };

  return (

    <Stack>
      <Addisu.Provider value={{
        open: dialogValue.open,
        description: dialogValue.description,
        setDialogValue: setDialogValue,
        display: display,
        setDisplay: setDisplay,
        username: username,
        setUsername: setUsername,
        uid:id

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
