import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
  
  render() {
    return (
      <div className="Header">
          <div className="hdr-links">
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>HOME</Link>
            <Link to="Shop" style={{textDecoration: 'none', color: 'white'}}>SHOP</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>BLOG</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>LEARN</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>DISTRIBUTORS</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>FORUM</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>ABOUT US</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>TWITTER</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>FACEBOOK</Link>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>CONTACT</Link>
            <Link to="Login" style={{textDecoration: 'none', color: 'white'}}>LOGIN</Link>
            SEARCH
            <button>CART</button>
          </div>
      </div>
    );
  }
}

export default Header;