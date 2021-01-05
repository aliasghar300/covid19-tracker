import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NumberFormat from "react-number-format";
import Chart from "./Chart";
import "../App.css"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(8),
      textAlign: 'center',
      color: theme.palette.text.primary,
        
    },
  }));

export default function TotalCases({data}) {
  
  const classes = useStyles();
    
  
    return (
      <div className={classes.root}>
      <h1> World Wide Data</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}> 
          <h4>Total Cases</h4>
          <h2> <NumberFormat value={data[0].cases} displayType={"text"} thousandSeparator={true} > </NumberFormat> </h2> 
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <h4>Total Recovered</h4>
          <h2> <NumberFormat value={data[0].recovered} displayType={"text"} thousandSeparator={true}> </NumberFormat> </h2>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <h4> Total Deaths </h4>
          <h2> <NumberFormat value={data[0].deaths} displayType={"text"} thousandSeparator={true}> </NumberFormat> </h2>
          </Paper> 
        </Grid>
      </Grid>
      <br />
      <Chart data={data} />
    </div>
    )
}
