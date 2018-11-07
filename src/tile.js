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
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    tileHeader: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',   
      objectPosition: 'center',
    }
  })
};

class Tile extends Component {
  render() {
    const { classes, val, tileIndex } = this.props;
    return (
      <Link className={classes.workTile} to={"/work/"+tileIndex} style={{backgroundImage : `url(${val.thumbnail})`}}></Link>
    )
  }
}

export default withStyles(styles)(Tile);