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
      width: '100px'
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
      opacity: .6,
      transition: 'all 1s',
      '&:hover': {
        opacity: 1,
        filter: 'grayscale(0%)',
      }
    },
    clientImage: {
      width: '100px',
      display: 'block',
      margin: '0 auto',
    },
    timeline: {

    },
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
      }

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
            <Nav isFixed={true} isAbout={true} />
            <section className={classes.secAbout}>
              <div className={classes.secContainer}>
                <Typography variant="h2">About me</Typography>
                <Slide bottom>
                  <Typography variant="body2">Hello, I am a web developer with more than 18 years of experience in building web, mobile applications, games and e-learning solutions. I am a technology optimist, UX enthusiast, photographer, happy husband and proud father of two boys.</Typography>
                  <Typography variant="body2">A snapshot of my work experience is below. Feel free to reach out at <b>hello [a] prasanth.cc</b> or follow me on <a href="https://www.linkedin.com/in/prasanthpanicker/" rel="noopener noreferrer" target="_blank">Linkedin</a></Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant="h3">Experience</Typography>
                </Slide>


                <section className={classes.timeline}>
                  <ul className={classes.list}>
                    <Slide bottom cascade>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Mar 2019</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Senior Frontend Developer</Typography>
                            <Typography variant="h5" className={classes.company}>Parmenion, Bristol</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>I was part of the development team to build a new investment platform for a joint venture between Parmenion and Virgin Money. Developed and maintained various reusable UI elements and patterns using ReactJS and storybook, implemented frontend for the investment tools using React, Redux and Styled components</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Apr 2017</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Senior Web Developer</Typography>
                            <Typography variant="h5" className={classes.company}>Atkins, Bristol</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>New responsibilities include managing front end development team and ensure that development standards, policies and procedures are adhered to.</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>May 2012</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Web Developer</Typography>
                            <Typography variant="h5" className={classes.company}>Atkins, Bristol</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>As a part of the Creative Design team in Atkins, developed various online and mobile applications, intranet sites and e-learning applications. </Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Jan 2011</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Software Developer</Typography>
                            <Typography variant="h5" className={classes.company}>CCBT, Birmingham</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>Developed an online healthcare software, FearFighter which is integrated with a .net backend. Coordinated the localization and translation of all the existing CCBT healthcare apps.</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Mar 2010</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Technical Consultant</Typography>
                            <Typography variant="h5" className={classes.company}>Reubro, Kochi</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>Researched and documented the feasibility of using SmartFox server for multiplayer online games. Produced a proof of concept for Xplore Pangaea using Flash and SmartFox server, where multiple users can explore and interact with the virtual world and implemented the features such as interactive avatars, virtual goods trading and safe chatting. Developed an authoring and composing tool in Adobe Flash to dynamically create and modify the virtual worlds in the game.</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Sep 2008</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Actionscript Developer</Typography>
                            <Typography variant="h5" className={classes.company}>HiFX, Kochi</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>Played a key role in the development of iPlotz, an online application for creating websites and mobile app wireframes and mockups. This app is developed using MXML, Actionscript 3.0 and Adobe Flex framework.</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Mar 2008</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Web Technology Specialist</Typography>
                            <Typography variant="h5" className={classes.company}>Synapse, Goa</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>Developed microsites and landing pages for clients like Reliance, Microsoft, Sybase and Sharekhan. Redesigned the User Interface of ZapakMail based on the usability survey of their existing website and created a mock-up of new design for user testing.</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Jun 2004</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Multimedia Developer</Typography>
                            <Typography variant="h5" className={classes.company}>Sherston Software, Trivandrum</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>While working for Sherston Prasanth developed a number of data driven interactive learning materials for clients like BBC, Oxford University Press, Granada Learning and Sherston.</Typography>
                        </div>
                      </li>
                    </Slide>
                  </ul>
                </section>
                <Slide bottom>
                  <Typography variant="h3">Education</Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant="body2">MSc Web Development, Staffordshire University</Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant="body2">BSc Computer Science, Kerala University</Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant="h3">Clients</Typography>
                </Slide>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.clientBox}>
                      <Link to="/work/13">
                        <img src={bbcLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/13">
                        <img src={oupLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/11">
                        <img src={nhsLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/10">
                        <img src={nrLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/1">
                        <img src={CambridgeLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/6">
                        <img src={heLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/2">
                        <img src={ceLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                    <div className={classes.clientBox}>
                      <Link to="/work/0">
                        <img src={vmLogo} alt="HTML5" className={classes.clientImage} />
                      </Link>
                    </div>
                  </div>
                </Flip>
              </div>
            </section>
          </Grid>
        </Grid>
      </CSSTransitionGroup >
    )
  }
}

export default withStyles(styles)(About);