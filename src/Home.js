import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import Tile from './tile';
import Nav from './nav';
import { CSSTransitionGroup } from 'react-transition-group';
// import threeEntryPoint from "./hero/threeEntryPoint"
import scrollToComponent from 'react-scroll-to-component';

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
      background: 'radial-gradient(ellipse at center, rgba(252,252,252,1) 0%,rgba(221,222,222,1) 100%)',
    },  
    heroDiv: {      
      position: 'absolute',
      width: '100%',      
      textAlign: 'center',
    }, 
    heroText1: {      
      fontWeight: 800,
      color: '#17252a',
      fontSize: '65px'
    }, 
    heroText2: {      
      fontWeight: 600,
      color: '#17252a',
      fontSize: '32px'
    },     
    viewButton:{
      marginTop: '30px',
      borderRadius: 2,
      border: '1px solid #17252a',
      transition: 'all 1s', 
      '&:hover':{
        backgroundColor: 'transparent',
        // borderColor: '#3aafa9',
        // color: '#ffffff',
        borderRadius: 10,
      }
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
  scrollToWork = () => {
    scrollToComponent(this.refs.workTiles, { offset: -71, align: 'top', duration: 800, ease:'outCube'});
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
                <Typography variant="body1" className={classes.heroText1}>Hi, I'm Prasanth</Typography>
                <Typography variant="body1" className={classes.heroText2}>Web Developer based in Bristol</Typography>
                <Button className={classes.viewButton} onClick={this.scrollToWork}>View My Work</Button>
              </div>
              <div ref={element => this.threeRootElement = element} className={classes.threeDiv} />
            </section>
            <Nav isFixed={this.state.navFixed} isHome={true} />
            <section>
              {Data&&
                <div className={classes.workTiles} ref="workTiles">
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