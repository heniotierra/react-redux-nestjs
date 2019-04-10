import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

const styles = theme => ({
  header: {
    fontFamily: 'Open Sans',
    color: '#848484',
    fontSize: isMobile? '1.4em' : '2em'
  }
});

const PageTitle = (props) => {

  const { classes, text } = props;
  return (
    <span className={classes.header}>{text}</span>
  );

}

PageTitle.propTypes = {
  classes: PropTypes.object,
  text: PropTypes.string
};

export default withStyles(styles)(PageTitle);