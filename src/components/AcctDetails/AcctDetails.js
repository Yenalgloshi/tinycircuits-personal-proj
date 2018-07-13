import React, { Component } from 'react';
import Header from './../Header/Header';
import './AcctDetails.css';

class AcctDetails extends Component {
  render(){
    return(
      <div className='AcctDetails'>
        <Header/>
        <div className='ad-userInfo'>
          Account Details Page
        </div>
      </div>
    )
  }
}

export default AcctDetails;