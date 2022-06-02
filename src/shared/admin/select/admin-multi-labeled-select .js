import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 18;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function AdminMultiLabeledSelect(props) {
  const { items, title, onPermissionChange, initialValue, error } =
    props;
  const { cycleTwo, cycleTwoValue, cycleTwoLabel, formerr, transError } = props;

  const [Name, setName] = React.useState(initialValue || []);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setName(
      // On autofill we get a stringified value.
      typeof value === "string" ? "" : value
    );
  };
  React.useEffect(() => {
    onPermissionChange(Name);
  }, [Name]);

  const listItems =
    items &&
    items.map((name) => {
      return name[cycleTwo && cycleTwo].map((item) => {
        return (
          <MenuItem
            key={item[cycleTwoValue && cycleTwoValue]}
            value={item[cycleTwoValue && cycleTwoValue]}
          >
            <Checkbox
              checked={
                Name && Name.indexOf(item[cycleTwoValue && cycleTwoValue]) > -1
              }
            />
            <ListItemText
              primary={`${name[cycleTwoLabel && cycleTwoLabel]} > ${
                item[cycleTwoLabel && cycleTwoLabel]
              }`}
            />
          </MenuItem>
        );
      });
    });

  return (
    <>
      <FormControl sx={{ mt: 2, width: "100%" }} >
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          size="small"
          value={Name && Name}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          // inputProps={}
          renderValue={(selected) => selected.join(" , ")}
          MenuProps={MenuProps}
          error={error}
        >
          {listItems}
        </Select>
        {error && error && (
          <div
            style={{
              color: "red",
              fontSize: "12px",
              display: "flex",
              justifyContent: "flex-start",
              margin: "8px 12px 0 0 ",
            }}
          >
            {transError}
          </div>
        )}
        <div>{formerr}</div>
      </FormControl>
    </>
  );
}

export default AdminMultiLabeledSelect;
