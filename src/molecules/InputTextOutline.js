import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import copyIcon from '../assets/Icons/copy.svg'

const useStyles = makeStyles((theme) => ({
    labelRoot: {
        // height: 50,
        color: '#344563',
        fontFamily: 'Roboto Condensed',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0,
        // lineHeight: 18,
        borderRadius: 4,
     
    },
    copy: {
        height: 28,
        width: 27.75
    }

}));

export default function InputAdornments(props) {
    const classes = useStyles();

    // const handleCopy=()=>{
    //     <SnackbarComponent customClass={classes.customStyle} open={open} 
    //     message={"Link Copied"} onClose={() => { setOpen(false) }} />
    // }

    return (
            <FormControl variant="outlined" fullWidth>
                <OutlinedInput 
                    className={classes.labelRoot}
                    name={props.name}
                    value={props.value}
                    endAdornment={
                        <InputAdornment position="end">
                            <img className={classes.copy} src={copyIcon} alt="Copy"/>
                        </InputAdornment>
                    }
                />
                
            </FormControl>
    );
}



















