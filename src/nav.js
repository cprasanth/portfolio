import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const styles = theme => {
  const navHeight = '70px';
  return ({
    tabDiv: {
      backgroundColor: '#EEEEEE',
      width: '100%',
      height: navHeight,
      textAlign: 'center',
      display: 'flex',
    },
    tabDivFixed: {
      backgroundColor: '#EEEEEE',
      width: '100%',
      height: navHeight,
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      // boxShadow: '0px 2px 7px 0px rgba(186,186,186,1)',
      transition: 'box-shadow 1s',
      zIndex: '10',
      display: 'flex',
    },
    linkWork:{
      flexGrow: 1,
      justifyContent: 'flex-end',
      borderRadius: 0,
    },
    linkHome: {
      flexGrow: 0,
      borderRadius: 0,
    },
    linkAbout: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      borderRadius: 0,
    }
  })
};

class Nav extends Component {
  render() {
    const { classes, isFixed } = this.props;
    return (
      <div className={isFixed ? classes.tabDivFixed : classes.tabDiv}>
        <Button component={Link} to="/work/1" className={classes.linkWork}>W</Button>
        <Button component={Link} to="/" className={classes.linkHome}>H</Button>
        <Button component={Link} to="/about" className={classes.linkAbout}> M</Button>
      </div>
    )
  }
}

export default withStyles(styles)(Nav);