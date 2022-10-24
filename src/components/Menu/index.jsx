import React from 'react';
import { MenuItem, Menu as MuiMenu } from '@mui/material';

const Menu = ({ items, anchor, open, handleClose }) => {
  return (
    <MuiMenu open={open} anchorEl={anchor} onClose={handleClose}>
      {
        items.map(item => (
          <MenuItem>{item}</MenuItem>
        ))
      }
    </MuiMenu>
  )
}

export default Menu;