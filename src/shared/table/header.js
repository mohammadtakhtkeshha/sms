import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function Header(props) {
  return (
    <TableHead  >
      <TableRow>
        {props.columns &&
          props.columns.map((column, i) => (
            <TableCell
              key={i}
              align="center"
              size="small"
              sx={{ background: "#f0f2fa", color: "#A5A5A5",marginTop:"100px" }}
            >
              {column.label}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

