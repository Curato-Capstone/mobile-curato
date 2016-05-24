import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../modules/rootReducer';
import devTools from 'remote-redux-devtools';
import { primaryColor } from '../utils/colors';

import App from './App';

const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(primaryColor, true);
        StatusBar.setTranslucent(true);
        StatusBar.setHidden(false);
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
