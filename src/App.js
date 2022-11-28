import Navbar from './componenets/Navbar';
import { useState, createContext } from 'react';
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

  const [dialogValue, setDialogValue] = useState({
    open: false,
    description: '',
  })
 
 const [display, setDisplay] = useState(false)



  const handleClose = () => {
    setDialogValue({ ...dialogValue, open: false });
  };
  return (

    <Stack>
      <Addisu.Provider value={{
        open: dialogValue.open,
        description: dialogValue.description,
        setDialogValue: setDialogValue,
        display:display,
        setDisplay:setDisplay

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
