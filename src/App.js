import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAqOp1ifY3kP90fCHKSjBbI2UGK4-FKQGw',
    authDomain: 'manager-fb7be.firebaseapp.com',
    databaseURL: 'https://manager-fb7be.firebaseio.com',
    projectId: 'manager-fb7be',
    storageBucket: '',
    messagingSenderId: '4777195535'
  };
  firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}
export default App;
