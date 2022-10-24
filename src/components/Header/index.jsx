import { Typography } from "@mui/material";
import Navbar from "../Navbar";

const Header = ({children, title, ...params}) => {
return (
  <Navbar {...params} position="fixed">
    <Typography variant="h3" color="gray" component="div" sx={{ mr: 2 }}>{title}</Typography>
    {children}
  </Navbar>
)
}

export default Header;