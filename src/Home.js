import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import Tile from './tile';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

const styles = theme => {
  const navHeight = '70px';
  return ({
    heroSection: {
      width: '100%',
      height: 'calc(100vh - ' + navHeight + ')',
    },
    tabDiv: {
      backgroundColor: '#EEEEEE',
      width: '100%',
      height: navHeight,
      textAlign: 'center',
    },
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
    workTiles: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      position: 'relative',
    },
  })
};

class Home extends Component {
  state = {
    value: 0,
    navFixed: false,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll)
  }
  handleOnScroll = () => {
    if (window.pageYOffset < window.innerHeight - 70) {
      this.setState({ navFixed: false });
    } else {
      this.setState({ navFixed: true });
    }
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll)
  }
  render() {
    const { classes } = this.props;
    return (
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>

        <Grid container key="home">
          <Grid item xs={12}>
            <section className={classes.heroSection}>              
              <Typography variant="display1">Hello!</Typography>
            </section>
            {this.state.navFixed ?
              <div className={classes.tabDivFixed} ref="navRef">
                <Button component={Link} to="/work/1">W</Button>
                <Button component={Link} to="/about">M</Button>
              </div> :
              <div className={classes.tabDiv} ref="navRef">
                <Button component={Link} to="/work/1">W</Button>
                <Button component={Link} to="/about">M</Button>
              </div>
            }
            <section>
              <div className={classes.workTiles}>
                <Tile pic="1" />
                <Tile pic="2" />
                <Tile pic="3" />
                <Tile pic="4" />
                <Tile pic="5" />
                <Tile pic="6" />
                <Tile pic="7" />
                <Tile pic="8" />
                <Tile pic="9" />
              </div>
            </section>
          </Grid>
        </Grid>
      </CSSTransitionGroup>
    )
  }
}

export default withStyles(styles)(Home);