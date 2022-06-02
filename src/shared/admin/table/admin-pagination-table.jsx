import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import AdminPagination from "./pagination/admin-pagination";
import AdminHeader from "./table/admin-table-header";
import AdminBody from "./table/admin-table-body";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    boxShadow: "none",
  },
  table: {
    minWidth: 500,
    border: "none",
  },
  //     tableWrapper: {
  //         overflowX: "auto"
  //     }
}));
function AdminPaginationTable(props) {
  const classes = styles();

  const {
    columns,
    items,
    total,
    pageNumber,
    pageSize,
    pageSizeSelectable,
    keys,
    showPagination = true,
  } = props;
  const { onPageSizeChange, onPageNumberChange } = props;
  const { rowsPerPageLabel, displayedRowsFormatter } = props;

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} size="small">
          <AdminHeader columns={columns} />
          <AdminBody items={items} columns={columns} keys={keys} />
          {showPagination && total > 0 && (
            <AdminPagination
              
              colSpan={columns.length}
              totalCount={total}
              pageSizeSelectable={pageSizeSelectable}
              pageSize={pageSize}
              pageNumber={pageNumber}
              displayedRowsFormatter={displayedRowsFormatter}
              rowsPerPageLabel={rowsPerPageLabel}
              // Ask a question from saeed
              onChangePageClick={(_, newPage) => onPageNumberChange(newPage)}
              onChangeRowsPerPageClick={(event) =>
                onPageSizeChange(parseInt(event.target.value, 10))
              }
            />
          )}
        </Table>
      </div>
    </Paper>
  );
}

export default AdminPaginationTable;
