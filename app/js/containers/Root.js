import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../modules/rootReducer';
import devTools from 'remote-redux-devtools';

import App from './App';

const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
