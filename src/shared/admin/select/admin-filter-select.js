import React from "react";

import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
// import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles(() => ({
  selected: {
    color: "#A5A5A5 ",
    fontStyle: "normal !important",
    fontSize: "12px",
  },
}));

function AdminFilterSelect(props) {
  const { handleChange } = props;
  const {
    options,
    label,
    value: selectValue,
    onChange,
    backgroundColor: backgroundcolor,
    color,
    width= "100%",
  } = props;
  const classes = useStyles();
  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    getContentAnchorEl: null,
    backgroundColor:"red"
  };

  const selectHandler = (selected) => {
    const select = selected;
    if (selected.length === 0) {
      return <div className={classes.selected} key={label}>{label}</div>;
    }
    return <div className={classes.selected} > {select.name} </div>;
    // select.map((sel) =>
    // return (<span className={classes.selected}> {sel.name} </span>))
    // );
  };

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
    <FormControl ml sx={{width:width }} className={classes.formControl}>
      {/* <InputLabel id="demo-multiple-checkbox-label">{label}cccc</InputLabel> */}
      <Select
        // multiple
        size="small"
        value={selectValue || []}
        renderValue={(selected) => selectHandler(selected)}
        input={<OutlinedInput />}
        onChange={onChange}
        IconComponent={ExpandMoreSharpIcon}
        MenuProps={menuProps}
        sx={{
          fontFamily: " iranyekan !important",
          backgroundColor: "#fff",
          fontStyle: "normal !important",
          maxWidth: "165px"  ,
          minWidth:"100px",
          backgroundColor: "#fff" , color: color 
        }}
        //   renderValue={selected => {
        //     if (!selected) return "Placeholder";
        //     else return selected;
        // }}
        displayEmpty
 
      >
        {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
        {options.map((option) => (
          <MenuItem key={option.id} value={option}>
            {example(option)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default AdminFilterSelect;
