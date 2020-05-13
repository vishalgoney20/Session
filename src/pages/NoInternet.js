import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NoInternetImg from '../assets/Images/No internet.png'
import logo from '../assets/Logo/kind-linen-logo.svg'
import ButtonComponent from '../molecules/ButtonComponent'

const useStyles = makeStyles({
    typography: {
        color: '#344563',
        fontFamily: 'Roboto Condensed',
        fontSize: 16,
        letterSpacing: 0,
        textAlign: 'center'
    }
});

function NoInternet(props) {
    const classes = useStyles();
    return (

        <Container component="main" maxWidth="xs" >
            <CssBaseline />

            <Grid container direction="column" justify="center" alignItems="center" spacing={5}
                style={{ minHeight: '84vh' }} width='auto' >

                <Grid item style={{ minHeight: '50px' }} >
                    <img className="img-fluid" src={logo} alt="Logo " />
                </Grid>


                <Grid item style={{ minHeight: '30px' }} >
                    <img className="img-fluid" src={NoInternetImg} alt="Logo " />
                </Grid>

                <Grid item xs={12} >
                    <Typography style={{fontWeight:'bold' }} className={classes.typography} center="true" >
                        Woops!!
                </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography className={classes.typography} center="true" >
                        No internet connection
                </Typography>
                    <Typography className={classes.typography} center="true" >
                        Please check your connection
                </Typography>
                </Grid>
                <Grid item xs={12} >

                    <ButtonComponent value="Retry" type="submit" />

                </Grid>


            </Grid>
        </Container>
    );
}

export default NoInternet