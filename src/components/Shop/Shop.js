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

  componentDidMount(){
    axios.get('/api/product').then(response => {
      this.setState({products: response.data})
    })
  }

  handleSortSelector(){

  }

  handlePageNumClick(){

  }

  render(){
    let prodList = this.state.products.map((item, i) => {
      return (
        <div classname='shop-prod-details'>
          <img src={item.image} alt=""/>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <p>{item.description}</p>
        </div>
      )
    })
     return(
      <div className='Shop'>
        <Header/>
        <div className='shop-sort'>

        </div>
        <div className='shop-catagory-list'>

        </div>
        <div className='shop-prod-wpr'>
        <h1>ALL PRODUCTS</h1>
          <div className='shop-prod-content'>
            {prodList}
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