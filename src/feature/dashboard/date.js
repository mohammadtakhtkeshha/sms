import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DatePick = (props) => {
  const {value, setValue} = props;

  return (
    <div style={{ margin: 8 }}>
      <DatePicker
        onChange={setValue}
        value={value}
      />
    </div>
  );
}

export default DatePick;