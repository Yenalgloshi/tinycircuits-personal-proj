import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
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

  componentDidMount(){
    axios.get('/api/featuredProduct').then(response => {
      console.log('response.data', response.data);
      
      this.setState({featuredProd: response.data})
    })
  }

  render(){
    let featuredItems = this.state.featuredProd.map((item, i) => {
      console.log('featured items', item);
      
      return(
        <div className='home-featProd'>
          <Link to={`/productDetails/${item.id}`} className='featured-product'>
            <img src={item.image} className='featured-img' key={i} alt={item.name}/>
            <h3 id='feat-item-name'>{item.name}</h3>
          </Link>
        </div>
      )
    })

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
            <div className='home-prod-arcade'>
              <img src={tinyArcadePic} width='380px' alt="tinyArcade"/>
              <h3>TINY ARCADE</h3>
            </div>
            <div className='home-prod-duino'>
              <img src={tinyDuinoPic} width='380px' alt="tinyDuino"/>
              <h3>TINYDUINO</h3>
            </div>
            <div className='home-prod-tut'>
            <img src={tutorialsPic} width='380px' alt="tutorials"/>
              <h3>TUTORIALS</h3>
            </div>
          </div>
            <hr id='feat-hr'/>
            <h2 id='feat-h2'>Featured Products</h2>
          <div className='home-prod-feat'>
            {featuredItems}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;