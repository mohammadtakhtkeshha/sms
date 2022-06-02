import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
// import _ from "lodash";

export default function Body(props) {
  const { columns } = props;
  const items = props?.items?.length > 0 ? props?.items : false;

  const renderCell = (item, column, rowIndex) => {
    if (column.content) return column.content(item, rowIndex);
    return item && item[column.path];
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableBody>
        {items ? (
          items
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={item.name}>
                {columns.map((column, i) => {
                  return (
                    <TableCell
                      key={i}
                      align="center"
                      sx={{ width: column.width, fontSize: column.fontSize ,padding:"0 14px !important"}}
                      size="small"
                    >
                      {renderCell(item, column, index)}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={6}
              rowspan={2}
              align="center"
              size="small"
              style={{ height: "20vh", color: "#A5A5A5", fontSize: "16px" }}
            >
              اطلاعاتی موجود نیست{" "}
            </TableCell>
          </TableRow>
        )}
      </TableBody>

      <TablePagination
        sx={{
          background: "#f0f2fa",
          color: "#A5A5A9",
          boxShadow: "none ",
          border: "none",
        }}
        rowsPerPageOptions={[1, 10, 25, 100]}
        count={items && items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="تعداد "
        labelDisplayedRows={({ page }) => {
          return `صفحه: ${page}`;
        }}
      />
    </>
  );
}
