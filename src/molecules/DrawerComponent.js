import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import Buttons from './ButtonComponent';
import { ReactComponent as Send } from '../assets/Icons/send.svg';
import { ReactComponent as Resend } from '../assets/Icons/resend.svg';
import { ReactComponent as SendDull } from '../assets/Icons/sendDull.svg';
import { ReactComponent as Message } from '../assets/Icons/sms.svg';
import { ReactComponent as Mail } from '../assets/Icons/mail.svg';
import SnackbarComponent from '../atoms/SnackBar';

const useStyles = makeStyles({
  fullList: {
    width: 'auto',
    height: '263'
  },
  sendLinkToMobile: {
    height: 32,
    // width: 12,
    color: '#344563',
    fontFamily: 'Roboto Condensed',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 2.5,
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
  customStyle: {
    // maxWidth: 'fit-content',
    // marginLeft: '10%',
    // marginRight: '10%',
    marginBottom: '210',
    width:'max-content'
  }
});

function DrawerComponent
(props) {
  const classes = useStyles();
  const [resend, setResend] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.onClose()
    setResend(false)
  };

  const handleresend = () => {
    setResend(true)
  }
  const handleClick = () => {
    setOpen(true)
  }
  const list = () => (
    <div
      className={classes.fullList}
      role="presentation"
    >
      <List>
        <Typography className={classes.sharevia} variant='h5' align='center'>Share via</Typography>
        {props.data.map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon className={classes.listItemIcon}>{index % 2 === 0 ? <Message /> : <Mail />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.sendLinkToMobile }} primary={text} />
            <ListItemIcon className={classes.largeIcon}>{index % 2 === 0 ? <SendDull onClick={handleClick} /> : resend ? <Resend /> : <Send onClick={handleresend} />}</ListItemIcon>
          </ListItem>
        ))}
      </List>
      <div className={classes.button}>
        <Buttons disabled={!resend} value={"Done"} onClick={toggleDrawer} />
      </div>
    </div>
  );

  return (
        <React.Fragment >
          <Drawer anchor={'bottom'} open={props.open} onClose={toggleDrawer}>
            {list()}
          </Drawer>
          <SnackbarComponent customClass={classes.customStyle} open={open} message={"Go back to contact details and add mobile number"} onClose={() => { setOpen(false) }} />
        </React.Fragment>    
  );
}
export default DrawerComponent;
