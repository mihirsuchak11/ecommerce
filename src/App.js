import React from 'react';

import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';

import './App.css';

function App () {
    return (
        <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
        </div>
    );
}

export default App;
