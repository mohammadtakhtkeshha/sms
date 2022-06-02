import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "theme.palette.text.secondary",
  background: "#F0F2FA",
  boxShadow: "none ",
}));

function AdminFilterTitle(props) {
  const { title } = props;

  return (
    <Item>
      <Typography
        sx={{ color: "#8c8c8c", fontSize: "14px", marginRight: "8px" }}
        variant="h4"
        noWrap
        component="div"
      >
        {title}
      </Typography>
    </Item>
  );
}

export default AdminFilterTitle;
