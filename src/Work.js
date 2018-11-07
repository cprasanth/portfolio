import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { CSSTransitionGroup } from 'react-transition-group';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
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
      position: 'fixed',
      width: '100%',
      zIndex: 10,
    },
    secDetails: {
      marginTop: '111px',
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
      '&:hover': {
        backgroundColor: '#dddddd',
      }
    },
    nextButton: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#eeeeee',
      borderRadius: 0,
      '&:hover': {
        backgroundColor: '#dddddd',
      }
    },
    workHeader: {
      width: '100%',
      height: '200px',
      backgroundColor: '#aaaaaa',
      backgroundSize: 'cover',
    },
    bodyImages: {
      width: '100%',
      margin: '20px 0',
    },
    secContainer: {
      maxWidth: '740px',
      width: '100%',
      margin: '0 auto',
      padding: '0 20px',
    }
  })
};

class Work extends Component {
  componentWillReceiveProps() {
    this.forceUpdate();
  }
  render() {
    const { classes, Data } = this.props;
    if (!Data) {
      window.location = "/";
    }
    const curIndex = Number(this.props.curIndex);
    const lastIndex = Number(this.props.lastIndex);
    let prevIndex = curIndex - 1;
    let nextIndex = curIndex + 1;
    if (prevIndex < 0) {
      prevIndex = lastIndex;
    }
    if (nextIndex > lastIndex) {
      nextIndex = 0;
    }
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
              <Button className={classes.prevButton} aria-label="Previous" component={Link} to={`${'/work/' + prevIndex}`}>
                <NavigateBefore />
                Prev
              </Button>
              <Button className={classes.nextButton} aria-label="Next" component={Link} to={`${'/work/' + nextIndex}`}>
                Next
                <NavigateNext />
              </Button>
            </section>
            <section className={classes.secDetails}>
              <div className={classes.workHeader} style={{backgroundImage : `url(${Data.banner})`}}></div>
              <Slide bottom>
                <div className={classes.secContainer}>
                  <Typography className={classes.workTitle} variant="h2">{Data.title}</Typography>
                </div>
              </Slide>
              {
                Data.content.map((val, i) => {
                  switch (val.type) {
                    case "img":
                      return <Slide key={i} bottom>
                                <img className={classes.bodyImages} src={val.val} alt={Data.title} />
                              </Slide>
                    case "h3":
                      return <Slide key={i} bottom>
                                <div className={classes.secContainer}>
                                  <Typography variant="h3">{val.val}</Typography>
                                </div>
                              </Slide>
                    case "h4":
                      return <Slide key={i} bottom>
                                <div className={classes.secContainer}>
                                  <Typography variant="h4">{val.val}</Typography>
                                </div>
                              </Slide>
                    default:
                      return <Slide key={i} bottom>
                                <div className={classes.secContainer}>
                                  <Typography variant="body2">{val.val}</Typography>
                                </div>
                              </Slide>
                  }
                })
              }
            </section>
          </Grid>
        </Grid>
      </CSSTransitionGroup>
    )
  }
}

export default withStyles(styles)(Work);