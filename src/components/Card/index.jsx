import { styled } from "@mui/system";
import { Card } from "@mui/material";

export default styled(Card)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
