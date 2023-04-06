import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, TextField, Box, Typography } from "@mui/material";
import { getDatabase, ref, remove } from "firebase/database";
import EditForm from "./EditForm";

export default function DeleteDialog({ open, handleClose, value }) {

  // Delete Data
  const handleDelete = (key) => {
    const db = getDatabase();
    remove(ref(db, "users/" + key))
      .then(() => {
        
      })
      .catch((error) => {
        alert("Unseccessful , error" + error);
      });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h6">Delete User </Typography>
      </DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this user ??</p>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => handleDelete(value)}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
