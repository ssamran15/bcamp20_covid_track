import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ChartCovid from './Chart';
import Effected from './Effected';
import Header from './Header';
import Countries from './Countries';
import clsx from 'clsx';

function Copyright() {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.upwork.com/freelancers/~012a92b1074f7f7a16?viewMode=1">
                Samran Naveed
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixedHeight: {
        height: 240,
    },
    covidChar: {
        height: '200vh',
    }
}));

export default function Dashboard() {

    const [rsp, rspUpdate] = useState({});
    const countryConfig = useState('Global');
   
    useEffect(() => {

        let url = "https://covid-19-data.p.rapidapi.com/totals";

        async function fetchPosts(url) {
            const response = await fetch(url,
                {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "fd2b36b56fmsh53c0d1f67e4b0dcp1a2914jsn7a77767fe69a",
                        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
                    }
                })
            const data = await response.json()
            //console.log(data[0]);
            delete data[0].lastChange;
            delete data[0].lastUpdate;
            if(data[0].country)
            {
                delete data[0].country;
            }
            if(data[0].code)
            {
                delete data[0].code;
            }
            if(data[0].latitude)
            {
                delete data[0].latitude;
            }
            if(data[0].longitude)
            {
                delete data[0].longitude;
            }
            rspUpdate(data[0]);
            //return data[0];
        }
        //fetchPosts();
        if (countryConfig[0] === 'Global') {
            console.log('fucking Global');
            url = "https://covid-19-data.p.rapidapi.com/totals";
            fetchPosts(url);
        }
        else {
            console.log(countryConfig[0]);
            url = "https://covid-19-data.p.rapidapi.com/country?name="+countryConfig[0].toLowerCase();
            fetchPosts(url);
        }

    }, [countryConfig[0]]);

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper);
    return (
        <div className={classes.root}>
            <CssBaseline />

            <main className={classes.content}>
                <Header statName={countryConfig[0]} />

                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={2} justify="center">
                        <Effected rsp={rsp} />

                        <Grid item xs={12}>
                            <Grid container spacing={2} justify="center">
                                <Countries countryConfig={countryConfig} />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} justify="center">
                            <Paper className={fixedHeightPaper}>
                                <Grid container lg={5} md={5}>
                                    <ChartCovid rsp={rsp} />
                                </Grid>
                            </Paper>

                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}