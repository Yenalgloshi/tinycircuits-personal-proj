import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
  
  render() {
    return (
      <div className="Header">
        <Link to='/'>
          HOME
        </Link>
        <Link to="Shop">
          SHOP
        </Link>
        <Link to="/">
          BLOG
        </Link>
        <Link to="/">
          LEARN
        </Link>
        <Link to="/">
          DISTRIBUTORS
        </Link>
        <Link to="/">
          FORUM
        </Link>
        <Link to="/">
          ABOUT US
        </Link>
        <Link to="/">
          TWITTER
        </Link>
        <Link to="/">
          FACEBOOK
        </Link>
        <Link to="/">
          CONTACT
        </Link>
        <Link to="Login">
          LOGIN
        </Link>
        SEARCH
        <button>CART</button>
        
      </div>
    );
  }
}

export default Header;