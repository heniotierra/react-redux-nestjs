import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  header: {
    marginLeft: '5vw',
  },
  blue: {
    color: '#3d9be9'
  }
});

const Header = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container xs={12} className={classes.header}>
        <Typography>
          <h2 className={classes.blue}>TO-DO App</h2>
        </Typography>
      </Grid>
    </React.Fragment>
  );

}

Header.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Header);