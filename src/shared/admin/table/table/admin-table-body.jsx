import React from "react";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import lodash from "lodash";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

const styles = makeStyles({
  tBody: {
    fontSize: "0.9rem",
    textAlign: "center",
    textAlign: "-webkit-center",
    
  },
});

function AdminTableBody(props) {
  const { items, columns, keys = "id" } = props;

  const classes = styles();

  const renderCell = (item, column, rowIndex) => {
    if (column.content) return column.content(item, rowIndex);

    return lodash.get(item, column.path);
    // return item[column.path];
  };

  const createKey = (item, column, key) => {
    // return item.id + (column.path || column.key);
    return item[key] + (column.path || column.key);
  };

  return (
    <TableBody>
      {items.length > 0 ? (
        items.map((item, index) => (
          <TableRow key={item[keys]}>
            {columns.map((column) => (
              <TableCell
                key={createKey(item, column)}
                className={classes.tBody}
                align="center"
                sx={{ width: column.width, fontSize: column.fontSize ,padding:"0 14px !important"}}
                size="small"
                style={{ color: column.color }}
              >
                {renderCell(item, column, index)}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
              colSpan={6}
              rowSpan={2}
              align="center"
              size="small"
              style={{ height: "20vh", color: "#A5A5A5", fontSize: "16px" }}
            >
              اطلاعاتی موجود نیست{" "}
            </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}

export default AdminTableBody;
