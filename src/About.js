import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid,  Button } from '@material-ui/core';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

const styles = theme => {
  const navHeight = '70px';
  return ({
    tabDivFixed: {
      backgroundColor: '#EEEEEE',
      width: '100%',
      height: navHeight,
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      boxShadow: '0px 2px 7px 0px rgba(186,186,186,1)',
      transition: 'box-shadow 1s',
      zIndex: '10'
    },
  })
};

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <Grid container key="details">
          <Grid item xs={12}>
            <div className={classes.tabDivFixed}>
              <Button component={Link} to="/work/1">W</Button>
              <Button component={Link} to="/about">M</Button>
            </div>
          </Grid>
        </Grid>
      </CSSTransitionGroup>
    )
  }
}

export default withStyles(styles)(About);