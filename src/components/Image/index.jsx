import React from "react";
import { Box, styled } from "@mui/system";

const Img = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const Image = ({ width = "100%", heigth = "auto", url, alt }) => {
  return (
    <Box
      sx={{
        width: width,
        height: heigth,
      }}
    >
      <Img src={url} alt={alt} />
    </Box>
  );
};

export default Image;
