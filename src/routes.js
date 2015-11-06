import React from 'react'
import ReactRouter, { IndexRoute, Route } from 'react-router'
import Wrap from './components/wrap';
import Home from './components/home';
import Count from './components/count';

export default (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/count' component={Count}/>
    </Route>
);