import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { twitter, fb, contact, login, search } from './../../assets/iconsSVG';
import './Header.css';

class Header extends Component{
  
  render() {
    return (
      <div className="Header">
          <div className="hdr-links">
            <Link to='/'>
              <img src={require('./../../assets/TinyCircuitsLogo.png')} 
                   className='hdr-home-logo' 
                   alt="home-logo" />
            </Link>
            <img src={require('./../../assets/free_shipping.png')} 
                 className='hdr-freeShip-logo' 
                 alt="free-ship"/>
            <Link to="/Shop" style={{textDecoration: 'none', color: 'white'}}>SHOP</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>BLOG</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>LEARN</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>DISTRIBUTORS</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>FORUM</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>ABOUT US</Link>
            <Link to="/" style={{fill: 'white', color: 'white'}}>{ twitter }</Link>
            <Link to="/" style={{fill: 'white', color: 'white'}}>{ fb } </Link>
            <Link to="/" style={{fill: 'white', color: 'white'}}>{ contact }</Link>
            <Link to="/Login" style={{fill: 'white', color: 'white'}}> { login }</Link>
            <Link to="/" style={{fill: 'white', color: 'white'}}> { search }</Link>
            <Link to="/Cart">
              <button className='hdr-btn-cart'>CART</button>
            </Link>
          </div>
      </div>
    );
  }
}

export default Header;