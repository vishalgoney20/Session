import React from 'react';
//import Button from '@material-ui/core/Button';
//import { SnackbarProvider, useSnackbar } from 'notistack';
import { makeStyles, Snackbar } from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        height: 36,
        color: '#FFFFFF',
        fontFamily: "Roboto Condensed",
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0,
        textAlign: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 0 0 0',
        // paddingBottom: 0,
        // paddingLeft: 0,
        // paddingRight: 0,
    },
    tempStyles: {
        marginBottom: "55%",
    }
});

export default function SnackbarComponent(props) {
    const { customClass } = props;
    const classes = useStyles();
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={props.open}
                onClose={props.onClose}
                autoHideDuration={2000}
                // ContentProps={{
                //     classes: {
                //         root: classes['snackbarStyle']
                //     }
                // }}
                // className={classes['tempStyles']}
                message={props.message}
            >
                <SnackbarContent className={clsx(classes.root, {
                    [customClass ? customClass : classes.tempStyles]: true,
                })} message={props.message} />
            </Snackbar>
        </div>
    );
}
