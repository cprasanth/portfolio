import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Tile from './tile';
import { CSSTransitionGroup } from 'react-transition-group';
import { Slide, Fade } from 'react-reveal';
// import { Link } from 'react-router-dom';
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
      marginTop: '70px',
    },
    workTitle: {
      flex: 3,
      lineHeight: '48px',
      marginTop: '70px',
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
      backgroundColor: '#aaaaaa',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      [theme.breakpoints.up('xs')]: {
        height: '250px',
      },
      [theme.breakpoints.up('md')]: {
        height: '300px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '400px',
      },
    },
    bodyImages: {
      width: '100%',
      margin: '10px 0',
    },
    secContainer: {
      maxWidth: '740px',
      width: '100%',
      margin: '0 auto',
      padding: '0 20px',
    },
    secInfoContainer: {
      maxWidth: '740px',
      width: '100%',
      margin: '30px auto',
      padding: '20px',
      backgroundColor: '#eeeeee',
    },
    vdo: {
      width: '100%',
    },
    secInfo: {
      margin: '0 0 10px 0',
      fontSize: '16px',
      fontWeight: 400,
      '& a': {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
        '&:visited': {
          color: '#2468CD',
        }
      }
    },
    workTiles: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      position: 'relative',
    },
  })
};

class Work extends Component {

  render() {
    const { classes, Data, Project } = this.props;
    if (!Project) {
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
            <section className={classes.secDetails}>
              <Fade bottom>
                <div className={classes.workHeader} style={{ backgroundImage: `url(${Project.banner})` }}></div>
              </Fade>
              <Slide bottom>
                <div className={classes.secContainer}>
                  <Typography className={classes.workTitle} variant="h2">{Project.title}</Typography>
                </div>
              </Slide>
              {
                Project.content.map((val, i) => {
                  switch (val.type) {
                    case "img":
                      return <Fade key={i} bottom>
                        <img className={classes.bodyImages} src={val.val} alt={Project.title} />
                      </Fade>
                    case "video":
                      return <Fade key={i} bottom>
                        <video autoPlay muted loop playsInline className={classes.vdo}>
                          <source src={val.val} type="video/mp4" />
                        </video>
                      </Fade>
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
                    case "info":
                      return <Slide key={i} bottom>
                        <div className={classes.secInfoContainer}>
                          <Typography variant="body2" className={classes.secInfo}><b>Client: </b>{val.client}</Typography>
                          <Typography variant="body2" className={classes.secInfo}><b>Company: </b>{val.company}</Typography>
                          <Typography variant="body2" className={classes.secInfo}><b>Tech: </b>{val.tech}</Typography>
                          {val.url &&
                            <Typography variant="body2" className={classes.secInfo}><b>Website: </b><a target="_blank" rel="noopener noreferrer" href={val.url}>{val.urlText}</a></Typography>
                          }
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
            <Typography variant="h3" className={classes.moreProj}>More Projects</Typography>
            <section>
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

export default withStyles(styles)(Work);