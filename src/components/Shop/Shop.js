import React, { Component } from 'react';
import Header from './../Header/Header';
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
      </div>
    )
  }
}

export default Shop;