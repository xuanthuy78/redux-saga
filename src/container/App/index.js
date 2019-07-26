import React, { Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../../commons/Theme'
import Taskboard from '../Taskboard';

export class App extends Component {
  render() {
    console.log(this.props)
    return (
      <ThemeProvider theme={theme}>
       <Taskboard></Taskboard>
      </ThemeProvider>
    )
  }
}

export default withStyles(style)(App);
