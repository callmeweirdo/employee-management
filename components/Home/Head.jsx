import { Box, Typography } from "@mui/material";
import React from "react";

const Head = () => {
  return (
    <Box p={3} >
      <Box sx={{ textAlign: "center" }} >
        <Typography variant="h3" >Employee Management</Typography>
      </Box>
      
    </Box>
  );
};

export default Head;
