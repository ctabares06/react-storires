import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

const Footbar = () => {
  return (
    <Navbar position="relative" sx={{
      alignItems: 'center',
    }}>
      <Typography variant="h6" component="div">
        © All rights reserved
      </Typography>
    </Navbar>
  );
};

export default Footbar;
