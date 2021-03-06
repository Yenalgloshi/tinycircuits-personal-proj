import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import AcctDetails from './components/AcctDetails/AcctDetails';
import Register from './components/Register/Register';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/Shop' component={ Shop } />
    <Route path='/Login' component={ Login } />
    <Route path='/AcctDetails' component={ AcctDetails } />
    <Route path='/Register' component={ Register } />
    <Route path='/productDetails/:itemId' component={ ProductDetails } />
    <Route path='/Cart' component={ Cart } />
    <Route path='/Checkout' component={ Checkout }/>
  </Switch>
)