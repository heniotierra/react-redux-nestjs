import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog  = (props) => {

  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => props.onClose()} color="primary" autoFocus>
          {props.closeLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );

}

AlertDialog.props = {
  open: PropTypes.boolean,
  title: PropTypes.string, 
  description: PropTypes.string,
  closeLabel: PropTypes.string,
  onClose: PropTypes.func,
}

export default AlertDialog;