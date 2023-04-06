import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, TextField, Box, Typography } from "@mui/material";
import EditForm from "./EditForm";

export default function AlertDialog({ open, handleClose, value }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h4">Update Form </Typography>
      </DialogTitle>
      <DialogContent>
        <EditForm theUser={value} onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
