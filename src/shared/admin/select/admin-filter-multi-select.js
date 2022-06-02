import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
// import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 170,
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

function AdminFilterMultiSelect(props) {
  const { handleChange, options, label, value: selectValue, onChange } = props;
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
  };

  const selectHandler = (selected) => {
    const select = selected;
    const roles = [];
    if (selected.length === 0) {
      return <div className={classes.selected}>{label}</div>;
    }
    select.map((sel) =>
      roles.push(<span className={classes.selected}> {sel.name} </span>)
    );
    return roles;
  };

  return (
    <FormControl
      sx={{ Width: "100%" }}
      // className={classes.formControl}
    >
      {/* <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel> */}
      <Select
        multiple
        value={selectValue || []}
        renderValue={(selected) => selectHandler(selected)}
        input={<OutlinedInput />}
        onChange={onChange}
        IconComponent={ExpandMoreSharpIcon}
        MenuProps={MenuProps}
        sx={{
          fontFamily: " iranyekan !important",
          backgroundColor: "#fff",
          fontStyle: "normal !important",
          minWidth: "165px", maxWidth: "165px"  
        }}
        size="small"
        // classes={{
        //   select: classes.select,
        //   icon: classes.selectIcon,
        // }}
        //   renderValue={selected => {
        //     if (!selected) return "Placeholder";
        //     else return selected;
        // }}
        displayEmpty
        // inputProps={{ "aria-label": "Without label" }}
      >
        {options.map((item) => (
          <MenuItem
            sx={{ fontStyle: "normal !important" }}
            key={item.id}
            mt={9}
            value={item}
          >
            {item.name ? item.name : item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default AdminFilterMultiSelect;
