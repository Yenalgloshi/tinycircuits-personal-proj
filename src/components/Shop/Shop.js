import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import axios from 'axios';
import './Shop.css';

class Shop extends Component {
  constructor(){
    super()

    this.state = {
      products: [],
      sortQuery: '',
      currPage: 1,
      dbOffset: 0
    }    
  }

  handleSortSelector(){

  }

  handlePageNumClick(){

  }

  render(){
    return(
      <div>
        <Header/>
        Shopping page
        <Footer/>
      </div>
    )
  }
}

export default Shop;