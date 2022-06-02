import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';

const useStyles = makeStyles({
  th: {
    fontSize: "0.95rem !important",
    fontWeight: "bold !important",
    textAlign: "center  !important",
    whiteSpace: "nowrap",
    backgroundColor: "transparent !important"
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F2FA !important",
    color: "#A5A5A5",
  }
}));


function AdminTableHeader(props) {
  const classes = useStyles();
  const { columns } = props;
  
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell
            key={column.key}
            style={{ width: column.width }}
            // className={classes.th}
            sx={{ background: "#f0f2fa",  textAlign: "center  !important", color: "#A5A5A5",whiteSpace: "nowrap"}}

          >
            {column.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default AdminTableHeader;
