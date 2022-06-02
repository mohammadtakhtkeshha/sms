import React from "react";
// import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
// import { Hidden } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   input: {
//     // padding: "4px",
//     minWidth: "120px",
//     height:"10px !important",
//     background:"red !important"
//   },
// }));

function AdminSelect(props) {
  // const classes = useStyles();
  const {
    options = [],
    name,
    label: selectLabel,
    value: selectValue,
    onChange,
    helperText,
    error,
    disabled,
    size,
    width = "100%",
    height= "100%",

  } = props;

  function example(option) {
    return option.fullName
      ? option.fullName
      : option.code || option.label
      ? option.label
      : option.name;
    // if (option.fullName) {
    //   return option.fullName;
    // } else if (option.code) {
    //   return option.label;
    // } else if (option.label) {
    //   return option.label;
    // } else {
    //   return option.name;
    // }
  }

  return (
    <>
      <FormControl sx={{ minWidth: width  }} size={size}> 
       <InputLabel sx={{ marginTop:-0.5  }} id="multiple-select-label">{selectLabel}</InputLabel>
        <Select
          id={name}
          label={selectLabel}
          fullWidth
          value={selectValue}
          onChange={onChange}
          error={error}
          helperText={helperText}
          disabled={disabled}
          select="true"
          // size="small"
          style={{height:height, background:"red !important"}}
        
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option}>
              {example(option)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <TextField
         size="small"
        sx={{ width:"100%" ,height:"12px"}}
        margin="dense"
        id={name}
        label={selectLabel}
        value={selectValue}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        select="true"
        InputLabelProps={{ style: { fontSize: 15 } }}
        InputProps={InputProps ? { classes: { input: classes.input } } : null}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option}>
            {example(option)}
          </MenuItem>
        ))}
      </TextField> */}
    </>
  );
}

export default AdminSelect;
