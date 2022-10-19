import { AppBar, Toolbar } from "@mui/material";

const Navbar = ({children, ...params }) => {
return (
  <AppBar {...params}>
    <Toolbar>
      {children}
    </Toolbar>
  </AppBar>
)
}

export default Navbar;