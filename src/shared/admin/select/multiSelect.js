/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import Checkbox from "@mui/material/Checkbox";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MultiSelect = (props) => {
  
  const { items,disabled, handleonChangees, label, value ,id,error} = props;
  console.log("error",error);
  const {handleonChangeesDisabled ,valueOne ,valueTwo} = props
  return (
    <>
      
       <Autocomplete
        id={id}
        value={value}
        error={error}
        freeSolo
        onChange={(event, newValue) => {
          handleonChangees(newValue && newValue.id);
        }}
        onInputChange={(event, newInputValue) => {
          handleonChangeesDisabled(newInputValue);
        }}
        disabled={disabled}
        options={items && items}
        getOptionLabel={items => (`${items[valueTwo]} (${items[valueOne]})`)}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </>
  );
};

export default MultiSelect;
