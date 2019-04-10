import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  footer: {
    marginTop: '2vh',
  },
  fooText: {
    color: '#3d9be9'
  }
});

const Footer = (props) => {

  const {classes} = props;
  return (
    <React.Fragment>
      <Grid container 
      alignItems="center"
      justify="center"
      className={classes.footer}>
        <Grid container
          alignItems="center"
          justify="center">
          <Typography className={classes.fooText}>
            2019 - React + Redux + Material-ui + Nestjs
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );

}

export default withStyles(styles)(Footer);
