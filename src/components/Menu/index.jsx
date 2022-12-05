import React from "react";
import { MenuItem, Menu as MuiMenu } from "@mui/material";
import { styled } from "@mui/system";

const Menu = ({ items, anchor, open, handleClose, ...rest }) => {
  return (
    <StyledMenu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      anchorEl={anchor}
      onClose={handleClose}
      {...rest}
    >
      {items.map((item) => (
        <MenuItem onClick={handleClose}>{item}</MenuItem>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.contrastText,
  },
}));

export default Menu;
