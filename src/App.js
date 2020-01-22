import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import Authentication from './pages/Authentication/Authentication';
import Checkout from './pages/Checkout/Checkout';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelector';

import './App.css';

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount () {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                    console.log(this.state);
                });

            } else {
                setCurrentUser(userAuth)
            }
        });
    }

    componentWillUnmount () {
        this.unsubscribeFromAuth();
    }

    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route  path="/shop" component={ShopPage} />
                    <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : <Authentication />} />
                    <Route exact path="/checkout" component={Checkout} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
