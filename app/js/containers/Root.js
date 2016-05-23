import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../modules/rootReducer';
import devTools from 'remote-redux-devtools';
import { Scene, Router } from 'react-native-router-flux';

// import Account from './Routes/Account';
import Search from './Routes/Search';
// import Favorites from './Routes/Favorites';
// import Suggestions from './Routes/Suggestions';
// import Preferences from './Routes/Preferences';
// import SignIn from './Routes/SignIn';
// import Place from './Routes/Place';

import App from './App';

const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root" component={App}>
                        <Scene initial key="search" component={Search} title="Search" />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
