import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { CSSTransitionGroup } from 'react-transition-group';
import { Flip, Slide } from 'react-reveal';
import Nav from './nav';

import htmlLogo from './images/html5.svg';
import jqueryLogo from './images/jquery.png';
import octoLogo from './images/OctoberCMS.png';
import angularLogo from './images/angular.svg';
import azureLogo from './images/azure.svg';
import backboneLogo from './images/backbone.svg';
import bootstrapLogo from './images/bootstrap.svg';
import cockpitLogo from './images/cockpit.svg';
import css3Logo from './images/css3.svg';
import githubLogo from './images/github.svg';
import gitlabLogo from './images/gitlab.svg';
import gulpLogo from './images/gulp.svg';
import javascriptLogo from './images/javascript.svg';
import laravelLogo from './images/laravel.svg';
import lessLogo from './images/less.svg';
import materializecssLogo from './images/materializecss.svg';
import materialuiLogo from './images/material-ui.svg';
import nodejsLogo from './images/nodejs.svg';
import psLogo from './images/ps.svg';
import pugLogo from './images/pug.svg';
import reactLogo from './images/react.svg';
import reduxLogo from './images/redux.svg';
import sassLogo from './images/sass.svg';
import webpackLogo from './images/webpack.svg';
import wordpressLogo from './images/wordpress.svg';
import mysqlLogo from './images/mysql.svg';
import firebaseLogo from './images/firebase.svg';
import couchLogo from './images/couchdb.svg';
import invisionLogo from './images/invision.svg';
import illusLogo from './images/illus.svg';
import jiraLogo from './images/jira.svg';

import HeathrowLogo from './images/heathrow.svg';
import heLogo from './images/he.svg';
import ceLogo from './images/ce.svg';
import nhsLogo from './images/nhs.svg';
import bbcLogo from './images/bbcd.svg';
import oupLogo from './images/oup.svg';
import nrLogo from './images/nr.svg';

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
            <Nav isFixed={true} />
            <section className={classes.secAbout}>
              <div className={classes.secContainer}>
                <Typography variant="h2">About me</Typography>
                <Slide bottom>
                  <Typography variant="body2">Hello, I am a web developer with more than 14 years of commercial experience in developing high quality web applications, games, e-learning platforms and exceptional user experiences.</Typography>
                </Slide>
                <Slide bottom>
                  <Typography variant="h3">Experience</Typography>
                </Slide>


                <section className={classes.timeline}>
                  <ul className={classes.list}>
                    <Slide bottom cascade>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>Apr 2017</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Senior Web Developer</Typography>
                            <Typography variant="h5" className={classes.company}>Atkins, Bristol</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>Responsibilities include managing a team of four developers, running daily scrum standups and ensure that development standards, policies and procedures are adhered to.</Typography>
                        </div>
                      </li>
                      <li className={classes.item}>
                        <div className={classes.content}>
                          <Typography variant="h3" className={classes.time}>May 2012</Typography>
                          <div className={classes.job}>
                            <Typography variant="h4" className={classes.role}>Web Developer</Typography>
                            <Typography variant="h5" className={classes.company}>Atkins, Bristol</Typography>
                          </div>
                          <Typography variant="body2" className={classes.info}>As a part of the Creative Design team in Atkins, developed various online applications, intranet sites and e-learning applications. </Typography>
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


                <Typography variant="h3">Skills</Typography>
                <Typography variant="h4" className={classes.skillTitle}>HTML</Typography>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={htmlLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>HTML5</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={reactLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>JSX</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={pugLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Pug</Typography>
                    </div>
                  </div>
                </Flip>
                <Typography variant="h4" className={classes.skillTitle}>CSS</Typography>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={css3Logo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>CSS3</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={sassLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>SASS</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={lessLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>LESS</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={materialuiLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Material UI</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={materializecssLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Materialize</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={bootstrapLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Bootstrap</Typography>
                    </div>
                  </div>
                </Flip>
                <Typography variant="h4" className={classes.skillTitle}>Javascript</Typography>

                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={reactLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>React</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={reduxLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Redux</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={javascriptLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Javascript</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={jqueryLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>JQuery</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={angularLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Angular</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={backboneLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Backbone</Typography>
                    </div>
                  </div>
                </Flip>
                <Typography variant="h4" className={classes.skillTitle}>Backend</Typography>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={nodejsLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Node</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={laravelLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Laravel</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={mysqlLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>MySQL</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={firebaseLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Firebase</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={couchLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>CouchDB</Typography>
                    </div>
                  </div>
                </Flip>
                <Typography variant="h4" className={classes.skillTitle}>CMS</Typography>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={wordpressLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Wordpress</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={octoLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>OctoberCMS</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={cockpitLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>CockpitCMS</Typography>
                    </div>
                  </div>
                </Flip>
                <Typography variant="h4" className={classes.skillTitle}>Design</Typography>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={invisionLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Invision</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={illusLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Illustrator</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={psLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Photoshop</Typography>
                    </div>
                  </div>
                </Flip>
                <Typography variant="h4" className={classes.skillTitle}>Workflow</Typography>
                <Flip left cascade duration={1000}>
                  <div>
                    <div className={classes.skillBox}>
                      <img src={azureLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Azure Devops</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={jiraLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>JIRA</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={gitlabLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Gitlab</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={githubLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Github</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={webpackLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Webpack</Typography>
                    </div>
                    <div className={classes.skillBox}>
                      <img src={gulpLogo} alt="HTML5" className={classes.skillImage} />
                      <Typography variant="body2" className={classes.skillName}>Gulp</Typography>
                    </div>
                  </div>
                </Flip>
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
                      <img src={bbcLogo} alt="HTML5" className={classes.clientImage} />
                    </div>
                    <div className={classes.clientBox}>
                      <img src={oupLogo} alt="HTML5" className={classes.clientImage} />
                    </div>
                    <div className={classes.clientBox}>
                      <img src={nhsLogo} alt="HTML5" className={classes.clientImage} />
                    </div>
                    <div className={classes.clientBox}>
                      <img src={HeathrowLogo} alt="HTML5" className={classes.clientImage} />
                    </div>
                    <div className={classes.clientBox}>
                      <img src={nrLogo} alt="HTML5" className={classes.clientImage} />
                    </div>
                    <div className={classes.clientBox}>
                      <img src={heLogo} alt="HTML5" className={classes.clientImage} />
                    </div>
                    <div className={classes.clientBox}>
                      <img src={ceLogo} alt="HTML5" className={classes.clientImage} />
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