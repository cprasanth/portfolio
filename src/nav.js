import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import pccLogo from './images/pcc.svg';

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
      flexGrow: 0,
      width: '50px',
      borderRadius: 0,      
      backgroundColor: '#10171E',      
      '&:hover':{
        backgroundColor: '#253C45',
        color: '#ffffff',
      }, 
      '&:hover img':{
        transform: 'rotate(180deg)',
      },      
      '& img': {
        width: '60px',
        transition: 'all .4s ease-out',
      }
    },
    linkHomeActive:{
       
    },
    linkWork:{
      flexGrow: 1,
      justifyContent: 'flex-end',
      borderRadius: 0,
      color: '#bbbbbb',
      fontWeight: 700,      
      backgroundColor: '#10171E',
      padding: '6px 15px',
      '&:hover':{
        backgroundColor: '#253C45',
        color: '#ffffff',
      },      
    },
    linkWorkActive:{
      color: '#FFFFFF',
    },
    linkAbout: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      borderRadius: 0,
      color: '#bbbbbb',
      fontWeight: 700,
      backgroundColor: '#10171E',
      padding: '6px 15px',
      '&:hover':{
        backgroundColor: '#253C45',
        color: '#ffffff',
      },      
    },
    linkAboutActive:{
      color: '#FFFFFF',
    }
  })
};

class Nav extends Component {
  render() {
    const { classes, isFixed, isAbout, isWork } = this.props;
    let homeActive = '';
    let workActive = '';
    let aboutActive = '';
    if(isAbout){
      aboutActive = classes.linkAboutActive;
    }else if(isWork){
      workActive = classes.linkWorkActive;
    }else{
      homeActive = classes.linkHomeActive;      
    }
    return (
      <div className={isFixed ? classes.tabDivFixed : classes.tabDiv}>
        <Button component={Link} to="/work" className={`${classes.linkWork} ${workActive}`}>WORK</Button>
        <Button component={Link} to="/" className={`${classes.linkHome} ${homeActive}`}>
          <img src={pccLogo} alt="Logo" />
        </Button>
        <Button component={Link} to="/about" className={`${classes.linkAbout} ${aboutActive}`}>ABOUT</Button>
      </div>
    )
  }
}

export default withStyles(styles)(Nav);