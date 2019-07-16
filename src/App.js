import React from 'react';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

import './App.css';

function App () {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
        </div>
    );
}

export default App;
