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
      <div className='Shop'>
        <Header/>
        <div className='shop-sort'>

        </div>
        <div className='shop-catagory-list'>

        </div>
        <div className='shop-prod-wpr'>
          <div className='shop-prod-content'>
            <div classname='shop-prod-details'>

            </div>
          </div>
          <div className='shop-pagination'>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Shop;