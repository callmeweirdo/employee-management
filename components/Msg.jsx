import { Close } from "@mui/icons-material";
import { Button, IconButton, Snackbar } from "@mui/material";
import React from "react";

export const SuccessMsg = ({ toggle, setToggle, message }) => {
  // const [open, setOpen] = React.useState(toggle);
  console.log(message);
  const handleClick = () => {
    setToggle(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToggle(false);
  };
  const successAction = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={toggle}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={successAction}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ color: "white" }}
      />
    </div>
  );
};
