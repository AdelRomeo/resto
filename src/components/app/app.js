import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from "../hoc/with-resto-service";
import {Switch, Route} from "react-router-dom";

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
  const res = RestoService.getMenuItems()
  console.log(res)
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
      <AppHeader total={50}/>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/cart' exact component={CartPage}/>
        <Route exact component={MainPage}/>
      </Switch>
    </div>
  )
}

export default WithRestoService()(App);