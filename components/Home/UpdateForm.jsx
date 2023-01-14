import React, { useReducer, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { SuccessMsg } from "../Msg";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    setToggle(true);
    if (!Object.keys(formData).lenght) {
      setMessage("please complete your informations");
      console.log(formData);

      setToggle(true);
    } else {
      console.log(formData);
      setToggle(true);
    }
  };

  return (
    <>
      <Box onSubmit={handleSubmit} component="form">
        <Box my={2} component={Paper} p={3} elevation={4}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="first name"
                  variant="outlined"
                  onChange={setFormData}
                  name="firstName"
                />
                <TextField
                  id="outlined-basic"
                  label="last name"
                  variant="outlined"
                  name="lastName"
                  onChange={setFormData}
                />
                <TextField type="date" name="date" onChange={setFormData} />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="email"
                  name="email"
                  onChange={setFormData}
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="salaray"
                  variant="outlined"
                  onChange={setFormData}
                  name="salary"
                />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Status
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="active"
                  >
                    <FormControlLabel
                      value="active"
                      control={<Radio />}
                      label="active"
                      onChange={setFormData}
                      name="active"
                    />
                    <FormControlLabel
                      value="inactive"
                      control={<Radio />}
                      label="inactive"
                      name="inactive"
                      onChange={setFormData}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box pt={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="outlined"
              color="success"
              size="medium"
            >
              update
            </Button>
          </Box>
        </Box>
      </Box>
      <SuccessMsg message={message} toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default UpdateForm;
