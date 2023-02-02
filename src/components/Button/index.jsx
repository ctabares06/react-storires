import React from 'react';
import { Button as ButtonMui } from "@mui/material";

const Button = ({label, ...props}) => {
  return (
    <ButtonMui {...props}>{label}</ButtonMui>
  ) 
}

export default Button;

