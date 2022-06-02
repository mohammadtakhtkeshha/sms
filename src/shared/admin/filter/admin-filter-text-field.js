import React from "react";
import { makeStyles } from '@material-ui/core';
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  inputBase: {
    background: "#fff",
    height:"100%"
  },
  input: {
    "&::placeholder": {
      color: "#262556",
      fontSize: 12,
      height:"100%"
    },
    color: '#A5A5A5 !important',
    fontSize: 14,
    fontFamily: "iranyekan !important",
    height:"100%"
  },
 
}));

function AdminFilterTextField(props) {
  const { id, name, type, placeholder, value, onChange, error, helperText } =
    props;
  const classes = useStyles();

  return (
    <>
      <TextField
        size="small"
        inputStyle={{ boxShadow: "none !important" }}
        // autoComplete={true}
        // label={translate(`${trans}.fullName`)}
        className={classes.inputBase}
        InputProps={{
          classes: { input: classes.input },
        }}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
    </>
  );
}

export default AdminFilterTextField;
