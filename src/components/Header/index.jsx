import { Typography } from "@mui/material";
import Navbar from "../Navbar";

const Header = ({children, title, ...params}) => {
return (
  <Navbar {...params} position="fixed">
    <Typography variant="h3" color="light" component="div">{title}</Typography>
    {children}
  </Navbar>
)
}

export default Header;