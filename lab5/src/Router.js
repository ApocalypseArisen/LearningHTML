import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './pages/zad1.js'
import Forms from './pages/zad2.js'
import Lists from './pages/zad3.js'

const Router = () => {
  return (
    <Switch>
        <Route path="/" component={Menu} exact/>
        <Route path="/Forms" component={Forms}/>
        <Route path="/Lists" component={Lists}/>
    </Switch>
  );
}

export default Router;