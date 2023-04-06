import React, { useEffect, useState } from "react";
import { FormControl, TextField, Box, Button, alpha } from "@mui/material";
import { getDatabase, ref, update } from "firebase/database";

export default function EditForm({ theUser, onClose }) {
  const [id, setId] = useState(theUser.id);
  const [name, seteditName] = useState(theUser.name);
  const [pass, seteditPass] = useState(theUser.pass);
  const [Number, seteditContact] = useState(theUser.Number);
  

  const handleSubmit = () => {
    const db = getDatabase();
    update(ref(db, "users/" + id), {
      id: id,
      name: name,
      pass: pass,
      Number: Number,
    })
      .then(() => {
        alert("Data Updated Successfully");
      })
      .catch((error) => {
        alert("Unseccessful , error" + error);
      });

    // Close Dialog Box
    onClose();
  };

  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} width={400} height={350}>
        <FormControl variant="filled">
          <TextField
            label="Id"
            variant="filled"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </FormControl>
        <FormControl variant="filled" sx={{ mt: 2 }}>
          <TextField
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => seteditName(e.target.value)}
          />
        </FormControl>
        <FormControl variant="filled" sx={{ mt: 2 }}>
          <TextField
          type="password"
            label="Password"
            variant="filled"
            value={pass}
            onChange={(e) => seteditPass(e.target.value)}
          />
        </FormControl>
        <FormControl variant="filled" sx={{ mt: 2 }}>
          <TextField
            label="Contact Number"
            variant="filled"
            value={Number}
            onChange={(e) => seteditContact(e.target.value)}
          />
        </FormControl>{" "}
        <br></br>
        <Button variant="contained" onClick={handleSubmit}>
          Update
        </Button>
        <br></br>
      </Box>
    </div>
  );
}
