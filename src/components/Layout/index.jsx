import React from "react";
import StoreHeader from "../StoreHeader";
import Footbar from "../Footbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <StoreHeader />
      <Box sx={{
        my: "80px",
      }}>{children}</Box>
      <Footbar />
    </Box>
  );
};

export default Layout;
