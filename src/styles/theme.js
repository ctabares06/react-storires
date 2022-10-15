import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          width: "100%",
          cursor: "pointer",
          borderRadius: "5px",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: "#2596be",
            color: "#fff",
          },
        },
        {
          props: { variant: "bordered" },
          style: {
            background: "#2596be",
            color: "#fff",
            border: "#fff",
          },
        },
      ],
    },
  },
});
