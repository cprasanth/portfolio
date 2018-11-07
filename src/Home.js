import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Tile from './tile';
import Nav from './nav';
import { CSSTransitionGroup } from 'react-transition-group';
import threeEntryPoint from "./hero/threeEntryPoint"

const styles = theme => {
  const navHeight = '70px';
  return ({
    heroSection: {
      width: '100%',
      height: 'calc(100vh - ' + navHeight + ')',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },  
    heroDiv: {      
      position: 'absolute',
      width: '100%',
    }, 
    heroText: {      
      color: '#114B7B',
      textAlign: 'center',
    }, 
    threeDiv:{
      width: '100%',
      height: '100%',
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
    window.addEventListener('scroll', this.handleOnScroll);
    // threeEntryPoint(this.threeRootElement);//Start three js rendering
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
    const { classes, Data } = this.props;
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
              <div className={classes.heroDiv}>
                <Typography variant="display1" className={classes.heroText}>Hello!</Typography>
              </div>
              <div ref={element => this.threeRootElement = element} className={classes.threeDiv} />
            </section>
            <Nav isFixed={this.state.navFixed} />
            <section>
              {Data&&
                <div className={classes.workTiles}>
                  {
                    Data.map((val, i)=> {
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