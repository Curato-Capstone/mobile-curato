// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Scene, Router, Modal } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColor } from '../utils/colors';

// import Account from './Routes/Account';
import Search from './Routes/Search';
import Favorites from './Routes/Favorites';
import Preferences from './Routes/Preferences';

// import Suggestions from './Routes/Suggestions';
// import SignIn from './Routes/SignIn';
// import Place from './Routes/Place';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? primaryColor :'black'}}>{this.props.title}</Text>
        );
    }
}

let blah = function() {
    return (
        <Text>HIIII</Text>
    )
}

export default class MyRouter extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    componentWillMount() {
        Icon.getImageSource('user', 20, 'red').then((source) => this.setState({ backIcon: source }));
    }

    render () {
        console.log(this.state)
        return (
            <Router>
                <Scene
                    key="root"
                    component={Modal}
                    navigationBarStyle={{ backgroundColor: primaryColor }}
                    titleStyle={{ color: 'white', fontFamily: 'Montserrat-Light' }}
                >
                    <Scene />
                    <Scene key="tabbar" tabs>
                        <Scene key="tab1"  title="Search" icon={TabIcon}>
                            <Scene initial key="search" component={Search} title="Search"/>
                        </Scene>
                        <Scene key="tab2"  title="Favorites" icon={TabIcon}>
                            <Scene key="favorites" component={Favorites} title="Favorites" />
                        </Scene>
                        <Scene key="tab3"  title="Preferences" icon={TabIcon}>
                            <Scene key="preferences" component={Preferences} title="Preferences" />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
