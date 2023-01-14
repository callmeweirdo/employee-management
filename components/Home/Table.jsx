import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";

import data from "../../database/data.json";
// import Image from "next/image";

const Row = ({
  id,
  name,
  avatar,
  email,
  salary,
  date,
  status,
  setFlag,
  handleToggleUpdateForm,
}) => (
  <TableRow component="tr" scope="row">
    <TableCell>{name}</TableCell>
    <TableCell>
      <Box
        component="img"
        src={avatar || "#"}
        width={80}
        height={80}
        alt="employee"
      />
    </TableCell>
    <TableCell align="right">{email || "test@email.com"}</TableCell>
    <TableCell align="right">{salary || "$101"}</TableCell>
    <TableCell align="right">{date || "2022-01-10"}</TableCell>
    <TableCell align="right">
      <Button color="success" variant="outlined">
        Active
      </Button>
    </TableCell>
    <TableCell>
      <Box ml={3}>
        <Button
          color="info"
          variant="outlined"
          onClick={handleToggleUpdateForm}
        >
          <Edit />{" "}
        </Button>
        <Button color="error" variant="outlined">
          <Delete />
        </Button>
      </Box>
    </TableCell>
  </TableRow>
);

const Table = () => {
  const [toggleAddForm, setToggleAddForm] = useState(false);
  const [flag, setFlag] = useState("add");

  const handleTogglAddForm = () => {
    setToggleAddForm(!toggleAddForm);
    setFlag("add")
  };

  const handleToggleUpdateForm = () => {
    setToggleAddForm(!toggleAddForm);
    setFlag("update");
  }

  return (
    <Box component={Paper} elevation={1} p={3}>
      <Box py={2}>
        <Button onClick={handleTogglAddForm} size="medium" variant="outlined">
          add employee
        </Button>
      </Box>
      {toggleAddForm && flag == "add" && <AddForm />}
      {toggleAddForm && flag == "update" && <UpdateForm />}
      <TableContainer elevation={4} p={2} component={Paper}>
        <MuiTable sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>photo</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow>
              <TableCell component="th" scope="row">
                OG
              </TableCell>
              <TableCell align="right">tst@gmail.com</TableCell>
              <TableCell align="right">101000</TableCell>
              <TableCell align="right">10-10-2002</TableCell>
              <TableCell align="right">
                <Button color="success" variant="outlined">
                  Active
                </Button>
              </TableCell>
              <TableCell>
                <Box ml={3}>
                  <Button color="info" variant="outlined">
                    <Edit />{" "}
                  </Button>
                  <Button color="error" variant="outlined">
                    <Delete />
                  </Button>
                </Box>
              </TableCell>
            </TableRow> */}

            {data.map((obj, index) => (
              <Row
                {...obj}
                key={index}
                handleToggleUpdateForm={handleToggleUpdateForm}
                setFlag={setFlag}
              />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
export default Table;
