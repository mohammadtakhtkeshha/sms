import React from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MarginIcon from "@mui/icons-material/Margin";

function AdminInput(props) {
  const {
    name,
    required ,
    label,
    value,
    onChange,
    error,
    helperText,
    disabled = false,
    placeholder,
    multiline,
    rows,
    size = "medium",
    type ="text"
  } = props;

  return (
    <FormControl fullWidth variant="outlined">
      <TextField
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <MarginIcon />
        //     </InputAdornment>
        //   ),
        // }}
        // autoComplete={name}
        autoFocus
        type={type}
        margin="dense"
        fullWidth
        required={required}
        variant="outlined"
        id={name}
        name={name}
        label={label}
        value={value}
        multiline={multiline}
        rows={rows}
        placeholde={placeholder}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        size={size}
      />
    </FormControl>
  );
}

AdminInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default AdminInput;
