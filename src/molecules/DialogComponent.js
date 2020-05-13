import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ReactComponent as Send } from '../assets/Icons/send.svg';
import { ReactComponent as Resend } from '../assets/Icons/resend.svg';
import { ReactComponent as SendDull } from '../assets/Icons/sendDull.svg';
import { ReactComponent as Message } from '../assets/Icons/sms.svg';
import { ReactComponent as Mail } from '../assets/Icons/mail.svg';
import SnackbarComponent from '../atoms/SnackBar';
import ButtonComponent from '../molecules/ButtonComponent';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles({
  sendLinkToMobile: {
    height: 32,
    // width: 12,
    color: '#344563',
    fontFamily: 'Roboto Condensed',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 2.5,
    // paddingLeft:10,
    paddingRight:20
  },
  sharevia: {
    height: 32,
    // width: 58,
    color: '#344563',
    fontFamily: "Roboto Condensed",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: 3,
    textAlign:"center"
  },
  button: {
    textAlign: 'center'
  },
  listItemIcon: {
    width: 30,
    minWidth: 30
  },
  largeIcon: {
    width: 50,
    minWidth: 50
  },
  list:{
      paddingLeft:0,
      paddingRight:0
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, } = props;
  return ( 
    <MuiDialogTitle disableTypography>
      <Typography classes={{ primary: classes.sharevia }} variant="h6" >{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogComponent(props) {
    const classes = useStyles();
  const [resend, setResend] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleresend = () => {
    setResend(true)
  }
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    props.onClose()
    setResend(false)
  };

  return (
    <div>
        <SnackbarComponent open={open} message={"Go back to contact details and add mobile number"} onClose={() => { setOpen(false) }} />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Share Via
        </DialogTitle>
        <DialogContent style={{paddingBottom:'0',paddingTop:'0'}}>
          <List>
        {props.data.map((text, index) => (
          <ListItem key={text} className={classes.list}>
            <ListItemIcon className={classes.listItemIcon}>{index % 2 === 0 ? <Message /> : <Mail />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.sendLinkToMobile }} primary={text} />
            <ListItemIcon  style={{cursor:"pointer"}} className={classes.largeIcon}>{index % 2 === 0 ? <SendDull onClick={handleClick} /> : resend ? <Resend/> : <Send onClick={handleresend}/>}</ListItemIcon>
          </ListItem>
        ))}
      </List>
        </DialogContent>
        <DialogActions style={{paddingBottom:'16'}}>
          <ButtonComponent disabled={!resend} value={"Done"} onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
