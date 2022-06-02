import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AdminAutocomplete(props) {
  const { options, label, placeholder, value, onChange, name , defaultValue } = props;
  const [selectedTeam, setSelectedTeam] = React.useState([]);
debugger
  React.useEffect(() => {
    onChange(selectedTeam);
  }, [selectedTeam]);

  return (
    <Autocomplete
      fullWidth
      multiple
      id="checkboxes-tags-demo"
      options={options && options}
      getOptionLabel={(option) => option.name}
      limitTags={2}
      // value={selectedTeam}
      defaultValue={defaultValue && defaultValue}
      onChange={(_event, newTeam) => {
        setSelectedTeam(newTeam);
      }}
      // onChange={(_event, newItem) => handlerchange(_event,newItem)}
      // renderOption={(props, option, { selected }) => (
      //   <li {...props}>
      //     <Checkbox
      //       icon={icon}
      //       checkedIcon={checkedIcon}
      //       style={{ marginRight: 8 }}
      //       checked={selected}
      //     />
      //     {option.name}
      //   </li>
      // )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          margin="dense"
          label={label}
          placeholder={placeholder}
          size="medium"
        />
      )}
    />

    // <Autocomplete
    //fullWidth
    //   multiple
    //   limitTags={2}
    //   id="tags-standard"
    //   options={options}
    //   getOptionLabel={(option) => option.title}
    //   defaultValue={label}
    //   renderInput={(params) => (
    //     <TextField
    //       {...params}
    //       variant="outlined"
    //       label="limitTags"
    //       placeholder="Favorites"
    //     />
    //   )}
    // />
  );
}
