import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";
// import TextField from "@mui/material/TextField";

const styles = makeStyles((theme) => ({
  selected: {
    background: "#dfdede",
    borderRadius: "5px",
    margin: "5px 5px",
    padding: 3,
  },
}));

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

function AdminMultiSelect(props) {
  const classes = styles();

  const {
    options,
    name,
    label,
    value: selectValue,
    onChange,
    helperText,
    error,
    disabled,
    width = "100%",
    InputProps,
  } = props;

  const selectHandler = (selected) => {
    const select = selected;
    const names = [];
    if (selected.length === 0) {
      return <em>Placeholder</em>;
    }
    select.map((sel) =>
      names.push(<span className={classes.selected}> {sel.name} </span>)
    );
    return names;
  };

  return (
    <FormControl fullWidth sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        multiple
        input={<OutlinedInput label="Tdddddddddag" />}
        renderValue={(selected) => selectHandler(selected)}
        MenuProps={MenuProps}
        id={name}
        // label={label}
        fullWidth={false}
        value={selectValue || []}
        onChange={onChange}
        error={error}
        helperText={helperText}
        style={{ height:40 }}
      >
        <MenuItem value="" disabled className={styles.selectPlaceholderText}>
          {label}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option} placeholder={label}>
            <Checkbox checked={selectValue.indexOf(option) > -1} />
            <ListItemText primary={option.name} placeholder={label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    // <>
    //   <TextField
    //     size="small"
    //     sx={{ width: { width } }}
    //     multiple
    //     id={name}
    //     renderValue={(selected) => selectHandler(selected)}
    //     label={label}
    //     // value={selectValue || []}
    //     MenuProps={MenuProps}
    //     error={error}
    //     helperText={helperText}
    //     disabled={disabled}
    //     select="true"
    //     SelectProps={{
    //       multiple: true,
    //       value: selectValue || [],
    //       onChange: onChange
    //     }}
    //     InputLabelProps={{ style: { fontSize: 15, padding: "0 0 10px 0" } }}
    //     InputProps={InputProps ? { classes: { input: classes.input } } : null}
    //   >
    //     {options.map((option) => (
    //       <MenuItem key={option.id} value={option} placeholder={label}>
    //         <Checkbox checked={selectValue.indexOf(option) > -1} />
    //         <ListItemText primary={option.name} placeholder={label} />
    //       </MenuItem>
    //     ))}
    //   </TextField>
    // </>
  );
}

export default AdminMultiSelect;
