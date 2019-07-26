import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    color: {
      primary: "#D32F2F",
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  });

  export default theme;