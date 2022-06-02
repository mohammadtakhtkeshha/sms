import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Form from "./Form";
import Table from './Table';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Dashboarde() {


  return (

    <>

      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper className="">
            <Form />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="">
            <Table />
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
    </>

  );
}