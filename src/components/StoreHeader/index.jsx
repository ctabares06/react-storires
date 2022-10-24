import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Header from "../Header";
import Menu from "../Menu";

const items = ["keyboards", "key caps", "switches", "PCB's"];

const StoreHeader = () => {
  const [productMenuEl, setProductMenuEl] = useState(null);
  const isProductMenuOpen = Boolean(productMenuEl);
  const onProductMenuClose = () => {
    setProductMenuEl(null);
  };
  const onProductMenuOpen = (event) => {
    setProductMenuEl(event.currentTarget);
  };

  return (
    <Header color="dark" title="CheapCaps">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography
          variant="h4"
          color="lightgray"
          component="div"
          onClick={onProductMenuOpen}
        >
          Products
        </Typography>
        <Menu
          anchor={productMenuEl}
          open={isProductMenuOpen}
          items={items}
          handleClose={onProductMenuClose}
        />
        <Typography variant="h4" color="lightgray" component="div">
          Cart
        </Typography>
      </Box>
    </Header>
  );
};

export default StoreHeader;
