import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { CSSTransitionGroup } from 'react-transition-group';
import { Flip, Slide } from 'react-reveal';
import Nav from './nav';

import { Link } from 'react-router-dom';

import CambridgeLogo from './images/cambridge.png';
import heLogo from './images/he.svg';
import ceLogo from './images/ce.svg';
import nhsLogo from './images/nhs.svg';
import bbcLogo from './images/bbcd.svg';
import oupLogo from './images/oup.svg';
import nrLogo from './images/nr.svg';
import vmLogo from './images/vm.png';

const styles = (theme) => {
  const navHeight = '70px';
  return {
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
      zIndex: '10',
    },
    secAbout: {
      marginTop: '100px',
    },
    secContainer: {
      maxWidth: '740px',
      width: '100%',
      margin: '0 auto',
      padding: '0 20px',
    },
    skillTitle: {
      fontSize: '18px',
      fontWeight: 700,
      marginTop: '30px',
    },
    skillBox: {
      display: 'inline-block',
      width: '100px',
    },

    skillImage: {
      width: '50px',
      display: 'block',
      margin: '0 auto',
    },
    skillName: {
      textAlign: 'center',
      marginTop: '5px',
      fontWeight: 500,
      fontSize: '14px',
    },
    clientBox: {
      display: 'inline-block',
      width: '150px',
      marginBottom: '30px',
      filter: 'grayscale(100%)',
      opacity: 0.6,
      transition: 'all 1s',
      '&:hover': {
        opacity: 1,
        filter: 'grayscale(0%)',
      },
    },
    clientImage: {
      width: '100px',
      display: 'block',
      margin: '0 auto',
    },
    timeline: {},
    list: {
      listStyle: 'none',
      borderLeft: 'solid 2px #dedede',
      margin: '20px 0',
    },
    item: {
      position: 'relative',
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: '20px',
        height: '20px',
        border: '2px solid #dedede',
        borderRadius: '50%',
        top: 10,
        left: -50,
        backgroundColor: '#ffffff',
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        width: '20px',
        height: '2px',
        top: 18,
        left: -30,
        backgroundColor: '#dedede',
      },
    },
    content: {
      paddingBottom: '50px',
    },
    time: {
      float: 'left',
      width: '60px',
      backgroundColor: 'teal',
      color: '#ffffff',
      textTransform: 'uppercase',
      padding: '10px',
      fontSize: '18px',
      margin: '10px 20px 0 0',
    },
    job: {
      float: 'left',
    },
    role: {
      fontSize: '22px',
      fontWeight: 500,
      margin: '10px 0 0 0',
    },
    company: {
      fontSize: '18px',
      fontWeight: 400,
      margin: '5px 0 0 0',
    },
    info: {
      paddingTop: '10px',
      clear: 'both',
    },
    reversed: {
      unicodeBidi: 'bidi-override',
      direction: 'rtl',
    },
  };
};

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CSSTransitionGroup
        transitionName='example'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Grid container key='details'>
          <Grid item xs={12}>
            <Nav isFixed={true} isAbout={true} />
            <section className={classes.secAbout}>
              <div className={classes.secContainer}>
                <Typography variant='h2'>About me</Typography>
                <Slide bottom>
                  <Typography variant='body2'>
                    Hello, I am a web developer with more than 18 years of
                    experience in building web, mobile applications, games and
                    e-learning solutions. I'm based in Bristol, but working for
                    clients across the UK and abroad.
                  </Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant='h3'>Contact</Typography>
                  <Typography variant='body2'>
                    Interested in working together? Feel free to contact me on{' '}
                    <b className={classes.reversed}>cc.htnasarp@0lleh</b> or
                    connect with me on{' '}
                    <a
                      href='https://www.linkedin.com/in/prasanthpanicker/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Linkedin
                    </a>
                  </Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant='h3'>Clients</Typography>
                </Slide>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.clientBox}>
                      <Link to='/work/13'>
                        <img
                          src={bbcLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/13'>
                        <img
                          src={oupLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/11'>
                        <img
                          src={nhsLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/10'>
                        <img
                          src={nrLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/1'>
                        <img
                          src={CambridgeLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/6'>
                        <img
                          src={heLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/2'>
                        <img
                          src={ceLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to='/work/0'>
                        <img
                          src={vmLogo}
                          alt='HTML5'
                          className={classes.clientImage}
                        />
                      </Link>
                    </div>
                  </div>
                </Flip>
              </div>
            </section>
          </Grid>
        </Grid>
      </CSSTransitionGroup>
    );
  }
}

export default withStyles(styles)(About);
