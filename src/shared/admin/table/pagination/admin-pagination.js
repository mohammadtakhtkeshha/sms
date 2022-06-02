import React from "react";
import { TablePagination, TableFooter, TableRow } from "@mui/material";
import AdminPaginationActions from "./admin-pagination-actions";

const rowsPerPageOptions = [10, 20, 30, 40, 50];

function AdminPagination(props) {
  const {
    colSpan,
    totalCount,
    pageSize,
    pageNumber,
    pageSizeSelectable = false,
  } = props;
  const { onChangePageClick, onChangeRowsPerPageClick } = props;
  const { rowsPerPageLabel, displayedRowsFormatter } = props;

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          sx={{
            background: "#f0f2fa",
            color: "#A5A5A9",
            boxShadow: "none ",
            border: "none",
          }}
          rowsPerPageOptions={pageSizeSelectable ? rowsPerPageOptions : []}
          rowsPerPage={pageSize}
          count={totalCount}
          page={pageNumber - 1}
          colSpan={colSpan}
          onPageChange={onChangePageClick}
          onRowsPerPageChange={onChangeRowsPerPageClick}
          labelRowsPerPage={rowsPerPageLabel}
          labelDisplayedRows={displayedRowsFormatter}
          ActionsComponent={AdminPaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
}

export default AdminPagination;
