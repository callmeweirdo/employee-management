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

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]: event.target.value,
//   };
// };

const AddForm = () => {
  // const [formData, setFormData] = useReducer(formReducer, {});
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");

  const [addEmployee, setAddEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    status: false,
  });

  const handleChange = (event) => {
    setAddEmployee ({
      ...addEmployee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(true);

    if (Object.keys(addEmployee).lenght == 0) {
      setMessage("please complete your informations");
      setToggle(true);
      return message;
    } else {
      console.log(addEmployee);
      setMessage("Employee Added successfully");
      setToggle(true);
      return message;
    }

    console.log(addEmployee)

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
                  onChange={handleChange}
                  name="firstName"
                  value={addEmployee.firstName}
                  
                />
                <TextField
                  id="outlined-basic"
                  label="last name"
                  variant="outlined"
                  name="lastName"
                  onChange={handleChange}
                  value={addEmployee.lastName}
                />
                <TextField type="date" name="date" onChange={handleChange} />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="email"
                  name="email"
                  onChange={handleChange}
                  variant="outlined"
                  value={addEmployee.email}
                />
                <TextField
                  id="outlined-basic"
                  label="salaray"
                  variant="outlined"
                  onChange={handleChange}
                  value={addEmployee.salary}
                  name="salary"
                />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Status
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="active"
                    onChange={handleChange}
                    name="status"
                    value={addEmployee.status}
                  >
                    <FormControlLabel
                      value="active"
                      control={<Radio />}
                      label="active"
                      // name="active"
                    />
                    <FormControlLabel
                      value="inactive"
                      control={<Radio />}
                      label="inactive"
                      // name="inactive"
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
              Add
            </Button>
          </Box>
        </Box>
      </Box>
      <SuccessMsg message={message} toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default AddForm;
