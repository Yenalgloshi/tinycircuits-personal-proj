import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div>
        <Header/>
        Home Page
        <Footer/>
      </div>
    )
  }
}

export default Home;