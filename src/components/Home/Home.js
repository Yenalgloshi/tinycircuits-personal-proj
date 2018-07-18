import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Slideshow from './../Slideshow/Slideshow';
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
            Divider
          </div>
          <div className='home-prod-links'>
            Product Links
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