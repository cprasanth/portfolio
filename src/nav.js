import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const styles = theme => {
  const navHeight = '70px';
  return ({
    tabDiv: {
      backgroundColor: '#17252a',
      width: '100%',
      height: navHeight,
      textAlign: 'center',
      display: 'flex',
      color: '#ffffff',
    },
    tabDivFixed: {
      backgroundColor: '#17252a',
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
      color: '#ffffff',
    },
    linkHome:{
      flexGrow: 1,
      justifyContent: 'flex-end',
      borderRadius: 0,
      color: '#ffffff',
      fontWeight: 700,
      '&:hover':{
        backgroundColor: '#ffce00',
        color: '#17252a',
      },
      '&.active':{
        backgroundColor: '#ffce00',
        color: '#17252a',
      }
    },
    linkAbout: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      borderRadius: 0,
      color: '#ffffff',
      fontWeight: 700,
      '&:hover':{
        backgroundColor: '#ffce00',
        color: '#17252a',
      },
      '&.active':{
        backgroundColor: '#ffce00',
        color: '#17252a',
      }
    }
  })
};

class Nav extends Component {
  render() {
    const { classes, isFixed, isHome } = this.props;
    return (
      <div className={isFixed ? classes.tabDivFixed : classes.tabDiv}>
        <Button component={Link} to="/" className={classes.linkHome}>HOME</Button>
        <Button component={Link} to="/about" className={classes.linkAbout}>ABOUT</Button>
      </div>
    )
  }
}

export default withStyles(styles)(Nav);