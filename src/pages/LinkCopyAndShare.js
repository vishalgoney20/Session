import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import InputTextOutline from '../molecules/InputTextOutline'
import ButtonComponent from '../molecules/ButtonComponent'
import logo from '../assets/Logo/kind-linen-logo.svg'
import BackButton from '../assets/Icons/BackButton.svg'
import { Media } from 'react-breakpoints'
import DialogComponent from '../molecules/DialogComponent';
import DrawerComponent from '../molecules/DrawerComponent';
import Box from "@material-ui/core/Box"

const useStyles = makeStyles({
    root: {
        maxWidth: '350px'
    },
    typography: {
        color: '#344563',
        fontFamily: 'Roboto Condensed',
        fontSize: 16,
        letterSpacing: 0,
        textAlign: 'center'
    },
    buttonStyle: {
        height: 50,
        width: 332,
    }
});

function LinkCopyAndShare(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [disable, setDisable] = React.useState(true)

    // const handleBack = () => {
    //     props.history.push("/")
    // }

    return (
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
    
        <Grid conatiner className={classes.root}>
            <Grid item xs={12}>

                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container justify={"center"} alignItems={"center"} style={{ height: '134px' }}>
                            <Grid item >
                                <img className="img-fluid" src={logo} alt="Logo " />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify={"center"} alignItems={"center"} style={{ height: '50px' }}>
                            <Grid item >
                                <Typography className={classes.typography} center="true" >
                                    Here is your Link
                                     </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify={"center"} alignItems={"center"} style={{ height: '51px' }}>
                            <Grid item xs={11}>
                                <InputTextOutline name={"https://KL.com/b/1enYggSV"} value={"https://KL.com/b/1enYggSV"} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={11}>
                        <Grid container justify={"space-between"} alignItems={"center"} style={{ height: '100px' }}>

                            <Grid item  >
                                <img src={BackButton} alt="Back Button" /*onClick={handleBack}*/ />
                            </Grid>

                            <Grid item >
                                <ButtonComponent value={"Share Link"} onClick={() => { setOpen(true) }} />
                                <Media>
                                    {({ breakpoints, currentBreakpoint }) =>
                                        breakpoints[currentBreakpoint] >= 480 ? (
                                            <DialogComponent open={open}
                                                data={['Send link to mobile number', 'Send link to email']}
                                                onClose={() => { setOpen(false) }}
                                                disable={props.match.params.id === '0' ? false : true} />
                                        ) : (
                                                <DrawerComponent
                                                    open={open}
                                                    data={['Send link to mobile number', 'Send link to email']}
                                                    onClose={() => { setOpen(false) }}
                                                    disable={props.match.params.id === '0' ? false : true}
                                                />
                                            )
                                    }
                                </Media>
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Grid>
        </Box>

    );
}

export default LinkCopyAndShare



// hello made some changes.





/*



        <Grid container alignItems={"center"} justify={"center"}>

            <Grid container style={{ minHeight: '84' }}>

            </Grid>
            <Grid container alignItems={"center"} justify={"center"}>
                <Grid item>
                    <img className="img-fluid" src={logo} alt="Logo " />
                </Grid>
                <Grid item container justify={"center"}>
                    <Grid container style={{ minHeight: '34' }}></Grid>
                    <Grid item>
                        <Typography className={classes.typography} center="true" >
                            Here is your Link
                    </Typography>
                    </Grid>
                </Grid>

                <Grid item container justify={"center"}>
                    <Grid container style={{ minHeight: '34' }}></Grid>
                    <Grid item>
                        <InputTextOutline name={"https://KL.com/b/1enYggSV"} value={"https://KL.com/b/1enYggSV"} />
                    </Grid>
                </Grid>
                <Grid className={classes.buttonStyle} item container justify={"center"} alignItems={"center"}>
                    <Grid container style={{ minHeight: '34' }}></Grid>
                    <Grid container justify={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <img src={BackButton} alt="Back Button" onClick={handleBack}/>
                        </Grid>
                        <Grid item>
                            <ButtonComponent value={"Share Link"} onClick={() => { setOpen(true) }} />
                            <Media>
                                {({ breakpoints, currentBreakpoint }) =>
                                    breakpoints[currentBreakpoint] >= 480 ? (
                                        <DialogComponent open={open}
                                            data={['Send link to mobile number', 'Send link to email']}
                                            onClose={() => { setOpen(false) }}
                                            disable={props.match.params.id === '0' ? false : true} />
                                    ) : (
                                            <DrawerComponent
                                                open={open}
                                                data={['Send link to mobile number', 'Send link to email']}
                                                onClose={() => { setOpen(false) }}
                                                disable={props.match.params.id === '0' ? false : true}
                                            />
                                        )
                                }
                            </Media>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

*/


        // <Container component="main" maxWidth="xs" >
        //     <CssBaseline />

        //     <Grid container direction="column" justify="center" alignItems="center" spacing={5}
        //         style={{ minHeight: '84vh' }} width='auto' >

        //         <Grid item style={{ minHeight: '50px' }} >
        //             <img className="img-fluid" src={logo} alt="Logo " />
        //         </Grid>

        //         <Grid item xs={12} style={{ minHeight: '30px' }} >
        //             <Typography className={classes.typography} center="true" >
        //                 Here is your Link
        //         </Typography>
        //         </Grid>

        //         <Grid item xs={12}>
        //             <InputTextOutline name={"https://KL.com/b/1enYggSV"} value={"https://KL.com/b/1enYggSV"} />
        //         </Grid>

        //         <Grid item xs={12}>
        //             <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2} >
        //                 <Grid item xs={3} sm={3} >
        //                     <img src={BackButton} alt="Back Button" />
        //                 </Grid>

        //                 <Grid item xs={6}>
        //                     <ButtonComponent value={"Share Link"} onClick={() => { setOpen(true) }} />
        // <Media>
        //     {({ breakpoints, currentBreakpoint }) =>
        //         breakpoints[currentBreakpoint] >= 480 ? (
        //             <DialogComponent open={open} 
        //             data={['Send link to mobile number', 'Send link to email']} 
        //             onClose={() => { setOpen(false) }} 
        //             disable={props.match.params.id==='0' ? false:true} />
        //         ) : (
        //             <DrawerComponent 
        //             open={open} 
        //             data={['Send link to mobile number', 'Send link to email']} 
        //             onClose={() => { setOpen(false) }} 
        //             disable={props.match.params.id==='0' ? false:true}
        //             />
        //             )
        //     }
        // </Media>
        //                 </Grid>

        //             </Grid>
        //         </Grid>

        //     </Grid>
        // </Container>
