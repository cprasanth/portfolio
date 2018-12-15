import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withStyles, CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Raleway from 'typeface-raleway';
import ScrollToTop from './scrollToTop';
import Home from './Home';
import Work from './Work';
import About from './About';
import Data from './data';

const theme = createMuiTheme({
  typography: {
    fontFamily: "\"Raleway\", \"Roboto\", \"Arial\", sans-serif",
    useNextVariants: true,
  },
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
    <ScrollToTop />
    <Switch>
      <Route path="/" exact render={() => <Home Data={Data.en} />} />
      <Route path="/work/:Id" render={(match) => <Work Data={Data.en[match.match.params.Id]} lastIndex={Data.en.length - 1} curIndex={match.match.params.Id} />} />
      <Route path="/about" render={() => <About />} />
      <Redirect to="/" />
    </Switch>
  </MuiThemeProvider>
);

export default withStyles(theme)(App);
