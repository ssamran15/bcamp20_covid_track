import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,

  },
  confirmed: {
    borderBottom: '5px solid #2196f3',
    color: '#2196f3'
  },
  recovered: {
    borderBottom: '5px solid #4caf50',
    color: '#4caf50'
  },
  critical: {
    borderBottom: '5px solid #ffc107',
    color: '#ffc107'
  },
  deaths: {
    borderBottom: '5px solid #f50057',
    color: '#f50057'
  }

}));

function Effected({ rsp }) {

  const classes = useStyles();

  return Object.keys(rsp).map((val, index) => {
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes[val]);

    return (
      <Grid item xs={12} md={4} lg={3} key={index} >
        <Paper className={fixedHeightPaper} >
          <Title className={val}>{val.toUpperCase()}</Title>
          <Typography component="p" variant="h3">

            <NumberFormat value={rsp[val]} displayType={'text'} thousandSeparator={true} prefix={''} />
          </Typography>
          <Typography component="p" variant="h5" style={{ color: 'grey' }}>
            {moment().format("ddd MMMM Do YYYY")}
          </Typography>
          {/* <Typography component="p" variant="h5">
          Number of { val } cases by COVID-19
        </Typography> */}
        </Paper>
      </Grid>);
  })
}


export default Effected;