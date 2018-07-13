import React, { Component } from 'react';
import Header from './../Header/Header';
import './Register.css';

class Register extends Component {
  render(){
    return(
      <div className='Register'>
        <Header/>
        <div className='reg-input-wpr'>
          Registration page
        </div>
      </div>
    )
  }
}

export default Register;