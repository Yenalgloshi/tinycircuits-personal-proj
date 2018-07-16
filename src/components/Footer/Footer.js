import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';

class Footer extends Component{
   render(){
     return(
       <div className='footer-main'>
        <div className='sub-footer'>
          <div className='footer-content-wpr'>
            <div className='footer-columns'>
              COMPANY
              <hr/>
              <Link to='/' style={{textDecoration: 'none', color: '#55c0d4'}}>About Tinycircuits</Link>
              <Link to='/' style={{textDecoration: 'none', color: '#55c0d4'}}>Contact Us</Link>
              <Link to='/' style={{textDecoration: 'none', color: '#55c0d4'}}>Distributors</Link>
            </div>
            <div className='footer-columns'>
              HELP
              <hr/>
              <Link to='/' style={{textDecoration: 'none', color: '#55c0d4'}}>Customer Service</Link>
              <Link to='/' style={{textDecoration: 'none', color: '#55c0d4'}}>Terms & Conditions</Link>
              <Link to='/' style={{textDecoration: 'none', color: '#55c0d4'}}>Privacy Policy</Link>
              
            </div>
            <div className='footer-columns'>
              ABOUT TINYCIRCUITS
              <hr/>
              <p>TinyCircuits is a Maker of Tiny Open Source Electronics that are easy to use and let you create miniature electronic projects.</p>
            </div>
            <div className='footer-columns'>
              NEWS & UPDATES
              <hr/>
              <p>Sign up to get the latest on sales, new releases and more...</p>
              <input onChange={ (e) => this.handleEmailInputChange( e.target.value )} 
                      className="footer-email-input" 
                      type="text"/>
              <button onClick={ this.handleSignUp } 
                        className="login-btn-login">>SIGN UP</button>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-pay-methods'>
            
          </div>
        </div>
       </div>
     )
   }
}

export default Footer;