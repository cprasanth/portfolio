import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { CSSTransitionGroup } from 'react-transition-group'
import Nav from './nav';

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
      transition: 'box-shadow 1s',
      zIndex: '10'
    },
    secTitle: {
      display: 'flex',
      boxShadow: '0px 2px 7px 0px rgba(186,186,186,1)',
      marginTop: navHeight,
      borderTop: 'solid 1px #dddddd',
    },
    workTitle: {
      flex: 3,
      lineHeight: '48px',
    },
    closeButton: {
      flexGrow: 0,
      padding: '8px 40px',
      borderRadius: 0,
    },
    prevButton: {
      flexGrow: 1,
      justifyContent: 'left',
      backgroundColor: '#eeeeee',
      borderRadius: 0,
    },
    nextButton: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#eeeeee',
      borderRadius: 0,
    },
  })
};

class Work extends Component {
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
            <Nav isFixed={true} />
            <section className={classes.secTitle}>
              <Button className={classes.prevButton} aria-label="Previous">
                <NavigateBefore />
                Prev
              </Button>
              {/* <Button className={classes.closeButton} aria-label="Close" component={Link} to="/">
                <Close />
              </Button> */}
              <Button className={classes.nextButton} aria-label="Next">
                Next
                <NavigateNext />
              </Button>
            </section>
            <section>
              <Typography className={classes.workTitle} variant="headline">Main title here</Typography>
            </section>
          </Grid>
        </Grid>
      </CSSTransitionGroup>
    )
  }
}

export default withStyles(styles)(Work);