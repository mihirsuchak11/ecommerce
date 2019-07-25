import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import Authentication from './pages/Authentication/Authentication';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';

import './App.css';

class App extends Component {

    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null

    componentDidMount () {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                    console.log(this.state);
                });

            } else {
                this.setState({
                    currentUser: userAuth
                })
            }
        });
    }

    componentWillUnmount () {
        this.unsubscribeFromAuth();
    }

    render () {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/signIn" component={Authentication} />
            </div>
        );
    }
}

export default App;
