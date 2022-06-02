import React from "react";
import Header from "../../../../shared/table/header";
import Body from "../../../../shared/table/body";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from '@material-ui/core';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  statusActive: {
    width: "100%",
    height: "28px",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "500",
    background: "rgba(40,169,119, 10%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#28A977",
  },
  statusInactive: {
    width: "100%",
    height: "28px",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "500",
    background: "rgba(169,40,40, 10%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#A92828",
  },
  count: {
    style: "14px",
  },
  operationsContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  operationsinactive: {
    color: "red",
  },
  operationsactive: {
    color: "green",
  },
}));
const trans = "departemans.list";

export default function ColumnGroupingTable(props) {
  const { onEditSwitch, onEdit, items } = props;
  const { t: translate } = useTranslation("departeman");
  const classes = useStyles();

  const columns = [
    {
      label:"Number",
      key: "id",
      content: (item, index) => <p>{index + 1}</p>,
      width: "5%",
    },
    {
      label: "Name",
      key: "name",
      path: "name",
      width: "25%",
    },
    {
      label: "Condition",
      key: "name",
      path: "name",
      width: "25%",
    },
   
    {
      label: "Operations",
      key: "operations",
      content: (item) => (
        <>
          <div className={classes.operationsContainer}>
          
           {<div
              onClick={() => onEdit(item)}
              style={{
                background: "#F0F2FA",
                width: "40px",
                height: "40px",
                lineHeight: "40px",
                cursor:"pointer",
              }}
            >
             Edit
            </div>}
          </div>
        </>
      ),
      width: "30%",
    },
  ];

  return (
    <Paper sx={{ boxShadow: "none", width: "100%", marginTop: "15px !important" }}>
      <TableContainer >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <Header columns={columns} />
            <Body items={items} columns={columns} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
}
