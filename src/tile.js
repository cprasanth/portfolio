import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const styles = theme => {
  return ({
    workTile: {
      [theme.breakpoints.up('xs')]: {
        flex: '0 0 100%',
      },
      [theme.breakpoints.up('md')]: {
        flex: '0 0 50%',
      },
      [theme.breakpoints.up('lg')]: {
        flex: '0 0 33.33334%',
      },
      height: '400px',
      cursor: 'pointer',
      overflow: 'hidden',
      position: 'relative',

      '&:hover $tileImage': {
        transform: 'scale(1.1)',        
      },
      
      '&:hover $tileCaption': {
        bottom: 0,       
      },

    },
    tileImage: {
      transition: 'all .8s ease',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%',
    },
    tileHeader: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    tileCaption: {
      position: 'absolute',
      bottom: '-50px',
      backgroundColor: '#17252A',
      color: '#FFFFFF',
      fontWeight: 500,
      width: '100%',
      padding: '10px',
      zIndex: 1000,
      transition: 'bottom .2s ease-in',
      margin: 0,
    }
  })
};

class Tile extends Component {
  render() {
    const { classes, val, tileIndex } = this.props;
    return (
      <Link className={classes.workTile} to={"/work/" + tileIndex}>        
        <div className={classes.tileImage} style={{ backgroundImage: `url(${val.thumbnail})` }}></div>
        <Typography variant="body2" className={classes.tileCaption}>{val.title}</Typography>
      </Link>
    )
  }
}

export default withStyles(styles)(Tile);