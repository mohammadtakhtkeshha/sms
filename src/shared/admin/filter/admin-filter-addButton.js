import React from "react";
import { makeStyles } from '@material-ui/core';
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "grid",
    justifyContent: "end",
  },
  title: {
    margin: 5,
  },
  button: {
    color: "#28A977",
    background: "rgba(254 ,254 ,254,1)",
    borderRadius: "5px",
    fontSize: "12px",
    boxShadow: "none ",
    "&:hover": {
      color: "rgba(254 ,254 ,254,1)",
      background: "#28A977",
    },
  },
}));

function ClientAddButton(props) {
  const { title , width="100%" } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={() => props.onCreate(true)}
        size="large"
      >
        <span style={{ fontSize: "12px",width:width  }}>{title}</span>
      </Button>
    </div>
  );
}

export default ClientAddButton;
