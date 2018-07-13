import React, { Component } from 'react';
import Header from './../Header/Header';
import axios from 'axios';
import './Register.css';

class Register extends Component {
  constructor(){
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }


  handleFirstNameChange(val){
    this.setState({firstName: val})
  }

  handleLastNameChange(val){
    this.setState({lastName: val})
  }

  handleEmailChange(val){
    this.setState({email: val})
  }

  handlePasswordChange(val){
    this.setState({password: val})
  }

  handleSignUp(){
    axios.post('/api/auth/register', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }).then (response => {
      this.props.history.push('/AcctDetails');
    }).catch(response => {
      alert('Registation not successful')
    })
      
  }


  render(){
    return(
      <div className='Register'>
        <Header/>
        <div className='reg-input-wpr'>
          CREATE ACCOUNT
            First Name
            <input onChange={ (e) => this.handleFirstNameChange( e.target.value )} 
                  className="login-firstName" 
                  type="text"/>
            Last Name
            <input onChange={ (e) => this.handleLastNameChange( e.target.value )} 
                  className="login-lastName" 
                  type="text"/>
            Email
            <input onChange={ (e) => this.handleEmailChange( e.target.value )} 
                  className="login-email" 
                  type="text"/>
            Password
            Forgot your password?
            <input onChange={ (e) => this.handlePasswordChange( e.target.value )} 
                  className="login-password" 
                  type="text"/>
            <button onClick={ this.handleSignUp } 
                    className="login-btn-login">>SIGN UP</button>
            Returning Customer?
            Sign in
        </div>
      </div>
    )
  }
}

export default Register;