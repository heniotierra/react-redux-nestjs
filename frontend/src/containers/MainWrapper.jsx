import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import { isMobile } from 'react-device-detect';

const styles = theme => ({
  mainWrapper: {
    marginLeft: '5vw',
    marginRight: '5vw',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    width: '90vw',
    height: '82vh',
    backgroundColor: '#f4f4f4',
    maxHeight: '82vh',
  },
});

class MainWrapper extends React.PureComponent {
  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Grid className={classes.mainWrapper}
          container 
          justify="center">
          {this.props.children}
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
} 

MainWrapper.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(MainWrapper);