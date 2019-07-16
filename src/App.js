import React from 'react';
// import { }
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import './App.css';

function App () {
    return (
        <div>
            <Route exact to="/" component={HomePage} />
        </div>
    );
}

export default App;
