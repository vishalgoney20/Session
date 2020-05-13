import React from 'react'
import MInputText from '../atoms/InputText';
import { Grid } from '@material-ui/core';
import ButtonComponent from '../molecules/ButtonComponent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from '../assets/Logo/kind-linen-logo.svg'

export default function ProspectContactForm(props) {
    const [state, setState] = React.useState({
        OrganizationName: '',
        ContactName: '',
        MobileNumber: '',
        Email: '',
        disable: false
    })
    console.log(state.OrganizationName, "org")
    console.log(state.Email, "email")
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const mySubmit = (event) => {
        event.preventDefault();
        if (state.OrganizationName === 'Eric')
            if (state.MobileNumber === '')
                props.history.push("/share/0")
            else
                props.history.push({ pathname: `/share/${state.MobileNumber}` });
        else
            alert("invalid Organization name");
    }

    return (

        <form onSubmit={mySubmit}
            center="true" align="center" >

            {/* <Container component="main" maxWidth="xs" >
                <CssBaseline /> */}

                <Grid container alignItems="center" justify="center"  direction="column"
                    style={{ minHeight: '100vh' }} >

                    <Grid item style={{ minHeight: '50px' }}>
                        <img className="img-fluid" src={logo} alt="Logo " />
                    </Grid>

                    <Grid item xs={12} width='133' height='32' >
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography style={{ fontSize: '24px', fontFamily: 'Roboto Condensed', fontWeight: "700" }}
                                    center="true">
                                    Welcome Eric!
                    </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography style={{ fontSize: '16px', fontFamily: 'Roboto Condensed' }}
                                    center="true">
                                    Let's Get Started
                     </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <MInputText type={"text"} required={true} value={state.OrganzationName} name={"OrganizationName"} label={"Organization Name"} onChange={handleChange} />
                    </Grid>
                    <Grid item>
                        <MInputText type={"text"} value={state.ContactName} name={"ContactName"} label={"Contact Name (Optional)"} onChange={handleChange} />
                    </Grid>
                    <Grid item>
                        <MInputText type={"text"} value={state.MobileNumber} name={"MobileNumber"} label={"Mobile Number (Optional)"} onChange={handleChange} />
                    </Grid>
                    <Grid item>
                        <MInputText type={"email"} required={true} value={state.Email} name={"Email"} label={"Email"} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonComponent disabled={state.OrganizationName === '' || state.Email === ''} variant="contained" color="primary" onClick={mySubmit} value="Generate Link">Submit</ButtonComponent>
                    </Grid>

                </Grid>

            {/* </Container> */}
        </form>

    )
}

