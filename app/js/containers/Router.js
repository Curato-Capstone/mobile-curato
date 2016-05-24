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
            <Text
                style={{
                    color: this.props.selected ? primaryColor :'black',
                    fontFamily: 'Montserrat-Light'
                }}
            >
                {this.props.title}
            </Text>
        );
    }
}

export default class MyRouter extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        return (
            <Router>
                <Scene
                    key="root"
                    component={Modal}
                    navigationBarStyle={{ backgroundColor: primaryColor }}
                    titleStyle={{ color: 'white', fontFamily: 'Montserrat-Light' }}
                >
                    <Scene />
                    <Scene key="tabbar" tabs tabBarStyle={STYLES.tabBar}>
                        <Scene key="tab1"  title="Search" icon={TabIcon}>
                            <Scene initial key="search" component={Search} title="Search" />
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

const STYLES = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        // shadowColor: 'black',
        // shadowOffset: { width: 2, height: 5 },
        // shadowOpacity: 1,
        // shadowRadius: 2,
        // elevation: 2,
    }
});
