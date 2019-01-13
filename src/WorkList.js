import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Tile from './tile';
import Nav from './nav';
import { CSSTransitionGroup } from 'react-transition-group';

const styles = theme => {
  return ({
    secWork: {
      marginTop: '100px',
    },
    secContainer: {
      maxWidth: '740px',
      width: '100%',
      margin: '0 auto',
      padding: '0 20px',
    },
    workTiles: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      position: 'relative',
    },
    workInfo: {
      marginBottom: '30px',
    }
  })
};

class Home extends Component {
  render() {
    const { classes, Data } = this.props;
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <Grid container key="worklist">
          <Grid item xs={12}>
            <Nav isFixed={true} isWork={true} />
            <section className={classes.secWork}>
              <div className={classes.secContainer}>
                <Typography variant="h2">Work</Typography>
                <Typography variant="body2" className={classes.workInfo}>Here's a selection of some of my recent projects. Click on an image for more details.</Typography>

              </div>
              {Data &&
                <div className={classes.workTiles} ref="workTiles">
                  {
                    Data.map((val, i) => {
                      return <Tile val={val} key={i} tileIndex={i} />
                    })
                  }
                </div>
              }
            </section>
          </Grid>
        </Grid>
      </CSSTransitionGroup>
    )
  }
}

export default withStyles(styles)(Home);