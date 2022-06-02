import React, { useState } from "react";
import { makeStyles } from'@material-ui/core';
import Button from "@mui/material/Button";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "100%",
  },

  submitIcon: {
    background: "rgba(40 ,169 ,119, 0.7)",
    color: "rgba(255 ,255 ,255,0.9)",
    borderRadius: "0px 5px 5px 0px",
    margin: "0 2px",
    "&:hover": {
      color: "rgba(255 ,255 ,255,1)",
      background: "#28A977",
    },
  },
  resetIcon: {
    background: "rgba(201, 37, 43, 0.1)",
    borderRadius: "5px 0px 0px 5px",
    color: "rgba(201, 37, 43, 0.9)",
    "&:hover": {
      color: "rgba(201, 37, 43, 1)",
      background: "rgba(201, 37, 43, 0.3)",
    },
  },
  childrens: {
    width: "100%",
  },
}));

export default function AdminFilterPanel(props) {
  const { children, onFilter, onReset } = props;
  const { clearText, filterText } = props;
  // const [errors, setErrors] = React.useState([]);
  const [errors] = React.useState([]);
  const { onChange, name } = props;
  const classes = useStyles();

  return (
    <>
      <Formik>
        <form autoComplete="false" noValidate className={classes.form}>
          {children}

          <Button
            size="large"
            type="submit"
            onClick={onFilter}
            // endIcon={<SavedSearchOutlinedIcon />}
            disabled={errors.length !== 0}
            className={classes.submitIcon}
          >
            <span style={{ fontSize: "12px" }}>{filterText}</span>
          </Button>

          <Button
            size="large"
            onClick={onReset}
            // startIcon={<CancelOutlinedIcon />}
            sx={{ minWidth: "max-content" }}
            className={classes.resetIcon}
          >
            <span style={{ fontSize: "12px" }}>{clearText} </span>
          </Button>
        </form>
      </Formik>
    </>
  );
}
