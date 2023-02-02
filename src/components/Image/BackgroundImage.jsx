import React from 'react';
import { Box } from '@mui/material';
import Image from '.';

const BackgroundImage = ({ children, url }) => {
  return (
    <Box
        sx={{
          width: "100%",
          position: "relative",
          height: "calc(100vh - 80px)",
        }}
      >
        <Box sx={{
          background: "rgba(0,0,0,0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {
            children
          }
        </Box>
        <Image url={url} alt="" heigth="100%" />
      </Box>
  )
}

export default BackgroundImage;