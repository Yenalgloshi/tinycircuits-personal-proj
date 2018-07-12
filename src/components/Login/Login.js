import React, { Component } from 'react';
import Header from './../Header/Header';
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

  handleEmailChange(val){
    this.setState({username: val})
  }

  handlePasswordChange(val){
    this.setState({password: val})
  }

  handleLoginRequest(){
  //   axios.post('/api/auth/login', {
  //     username: this.state.username,
  //     password: this.state.password
  //  }).then (response => {
  //    // Part of React History lib. Keeps track of routing history; 
  //    //  it pushes a new entry onto the history stack
  //    this.props.history.push('/dashboard');           
  //  }).catch(response => {
  //    alert('Username and/or Password not found')
  //  })
  }

  render(){
    return(
      <div>
        <Header/>
        Login page
      </div>
    )
  }
}

export default Login;