import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        <div className='shop-prod-content-wpr'>
          <hr id='shop-prod-divider'/>
          <div className='shop-prod-content'>
            <div className='shop-prod-img-container'>
              <Link to={`/productDetails/${item.id}`}>
                <img src={item.image} className='shop-prod-img' alt={this.state.name}/>
              </Link>
            </div>
            <div className='shop-prod-details'>
              <Link to={`/productDetails/${item.id}`} style={{textDecoration: 'none', color: '#55c0d4'}}>
                <h2 className='shop-item-name'>{item.name}</h2>
              </Link>
              <h3 className='shop-item-price'>$ {item.price}</h3>
              <p className='shop-item-description'>{item.description}</p>
              <Link to={`/productDetails/${item.id}`} key={i} style={{textDecoration: 'none', color: '#55c0d4'}}>Learn More &#8594;</Link>
            </div>
          </div>
        </div>
      )
    })
     return(
      <div className='Shop'>
        <Header/>
        <div className='shop-body'>
          <div className='shop-sort'>

          </div>
          <div className='shop-catagory-sidebar'>
            <h3 className='shop-catagory-title'>PRODUCT CATAGORIES</h3>
            <hr/>
            <ul>
              <li>All Products</li>
              <li>Kits</li>
              <li>Processors</li>
              <li>Sensors</li>
              <li>Communication</li>
              <li>LEDs/Displays</li>
              <li>Motors</li>
              <li>Audio</li>
              <li>Memory</li>
              <li>Proto Boards</li>
              <li>Batteries</li>
              <li>Accessories</li>
              <li>TinyLily - e-Textiles</li>
              <li>Crazy Circuits</li>
              <li>Discontinued</li>
            </ul>
          </div>
          <div className='shop-prod-wpr'>
            <h2 id='shop-prod-title'>ALL PRODUCTS</h2>
            {prodList}
            <div className='shop-pagination'>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Shop;