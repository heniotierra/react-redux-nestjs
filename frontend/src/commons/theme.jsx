import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#3d9be9'
    }
  },
  contentWrapper: {
    height: '75%',
    maxHeight: '75%'
  }
});

export default theme;