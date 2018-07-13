import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import AcctDetails from './components/AcctDetails/AcctDetails';
import Register from './components/Register/Register';


export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/Shop' component={ Shop } />
    <Route path='/Login' component={ Login } />
    <Route path='/AcctDetails' component={ AcctDetails } />
    <Route path='/Register' component={ Register } />
  </Switch>
)