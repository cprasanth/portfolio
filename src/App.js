import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withStyles, CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Righteous from 'typeface-righteous';
import Home from './Home';
import Work from './Work';
import About from './About';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#488A99',
    },
    secondary: {
      main: '#FAAE3D',
    },
    background: {
      default: '#DDDEDE'
    },
    fontFamily: Righteous,
  },
  '@global': {
    '.example-enter.example-enter-active': {
      opacity: 1,
      transition: 'opacity .3ms ease-in'
    },    
    '.example-leave': {
      opacity: 1
    },
    '.example-leave.example-leave-active': {
      opacity: 0.01,
      transition: 'opacity 300ms ease-in'
    },
    '.example-appear': {
      opacity: 0.01
    },
    
    '.example-appear.example-appear-active': {
      opacity: 1,
      transition: 'opacity .3s ease-in',
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Switch>
      <Route path="/" exact render={()=><Home />}/>
      <Route path="/work/:Id" render={()=><Work />}/>
      <Route path="/about" render={()=><About />}/>
      <Redirect to="/" />
    </Switch>
  </MuiThemeProvider>
);

export default withStyles(theme)(App);