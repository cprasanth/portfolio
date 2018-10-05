import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Tile from './tile';
import Nav from './nav';
import { CSSTransitionGroup } from 'react-transition-group';

const styles = theme => {
  const navHeight = '70px';
  return ({
    heroSection: {
      width: '100%',
      height: 'calc(100vh - ' + navHeight + ')',
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
            <Nav isFixed={this.state.navFixed} />
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