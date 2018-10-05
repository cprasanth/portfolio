import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = theme => {
  return ({
    workTile: {
      transition: 'all .4s ease',
      [theme.breakpoints.up('xs')]: {
        flex: '0 0 100%',
      },
      [theme.breakpoints.up('md')]: {
        flex: '0 0 50%',
      },
      [theme.breakpoints.up('lg')]: {
        flex: '0 0 33.33334%',
      },
      height: '500px',
      cursor: 'pointer',
    },
    tileHeader: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxHeight: '500px',      
    }
  })
};

class Tile extends Component {
  render() {
    const { classes, pic } = this.props;
    return (
      <Link className={classes.workTile} to="/work/2">
        <div className={classes.tileHeader} style={{ backgroundImage: 'url("https://loremflickr.com/1920/1080?lock=' + pic + '")' }}>
        </div>
      </Link>
    )
  }
}

export default withStyles(styles)(Tile);