import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DatePick from './date';
import Button from '@material-ui/core/Button';
import { blogsPost } from '../../services/blogsService';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));


export default function LayoutTextFields() {
  const classes = useStyles();
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState('');
  const [schedule, setSchedule] = useState('');

  const [phoneNumber, getPhoneNumber] = useState([]);
  const [message, getMessage] = useState('');
  const [gateWay, getGateWay] = useState('');
  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));


  const handlePost = async (event) => {
    event.preventDefault();
    const blog = {phoneNumber: [title],message: body,gateWayType: schedule };
    blogsPost(blog).then(({data}) => {
      const results = data[0]
      getPhoneNumber(results.phoneNumber)
      getMessage(results.message)
      getGateWay(results.gateWay)
    });
  };

  return (
    <>
    <div className={classes.root}>
      <div>
        <TextField
          id="outlined-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <TextField
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          style={{ margin: 8 }}
          multiline
          // rows={4}
          placeholder="Placeholder"
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
         <TextField
          id="outlined-multiline-gateway"
          label="gateWay"
          fullWidth
          style={{ margin: 8 }}
          multiline
          // rows={4}
          placeholder="Placeholder"
          variant="outlined"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
        {/* <DatePick style={{ margin: 8 }} fullWidth value={schedule} setValue={setSchedule} /> */}
        <Button style={{ margin: 8 }} variant="contained" color="primary" onClick={handlePost}>
            Primary
        </Button>
      </div>
      <hr></hr>

  
    </div>
      <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PhoneNumber</TableCell>
            <TableCell align="right">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell component="th" scope="row">
              {phoneNumber}
              </TableCell>
              <TableCell align="right">{message}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
