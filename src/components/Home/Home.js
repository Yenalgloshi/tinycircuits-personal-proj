import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Slideshow from './../Slideshow/Slideshow';
import tinyArcadePic from './HomeFeatured/feature1.jpg';
import tinyDuinoPic from './HomeFeatured/feature2.jpg';
import tutorialsPic from './HomeFeatured/feature3.jpg';
import './Home.css';

class Home extends Component {
  constructor(){
    super()

    this.state = {
      featuredProd: []
    }
  }
  render(){

    return(
      <div className='Home'>
        <Header/>
        <div className='home-body'>
          <div className='home-slideshow'>
           <Slideshow/>
          </div>
          <div className='home-divider'>
            <h2 id='divider-txt'>THE TINYDUINO ELECTRONICS PLATFORM <br/>MODULAR, SIMPLE, AND TINY</h2>
          </div>
          <div className='home-prod-links'>
            <img src={tinyArcadePic} width='380px' alt="tinyArcade"/>
            <img src={tinyDuinoPic} width='380px' alt="tinyDuino"/>
            <img src={tutorialsPic} width='380px' alt="tutorials"/>
          </div>
          <div className='home-prod-feat'>
            Featured Products
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;