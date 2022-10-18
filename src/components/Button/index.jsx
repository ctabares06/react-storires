import React from 'react';
import { ButtonBase } from "@mui/material";

const Button = ({label, ...props}) => {
  return (
    <ButtonBase {...props}>{label}</ButtonBase>
  ) 
}

export default Button;

