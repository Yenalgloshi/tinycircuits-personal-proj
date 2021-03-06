import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);

  }

  // componentDidMount(){
  //   axios.get('api/auth')
  // }

  handleEmailChange(val){
    this.setState({email: val})
  }

  handlePasswordChange(val){
    this.setState({password: val})
  }

  handleLoginRequest(){
    axios.post('/api/auth/signin', {
      email: this.state.email,
      password: this.state.password
   }).then (response => {
     // Part of React History lib. Keeps track of routing history; 
     //  it pushes a new entry onto the history stack
     this.props.history.push('/AcctDetails');           
   }).catch(response => {
     alert('Email and/or password not found')
   })
  }

  render(){
    return(
      <div className='Login'>
        <Header/>
        <div className='login-input-wpr'>
          CUSTOMER LOGIN
          Email
          <input onChange={ (e) => this.handleEmailChange( e.target.value )} 
                 className="login-email" 
                 type="text"/>
          Password
          Forgot your password?
          <input onChange={ (e) => this.handlePasswordChange( e.target.value )} 
                 className="login-password" 
                 type="text"/>
          <button onClick={ this.handleLoginRequest } 
                  className="login-btn-login">>SIGN IN</button>
          New Customer?
          Sign up
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Login;