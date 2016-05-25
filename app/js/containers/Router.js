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
import Suggestions from './Routes/Suggestions';
// import SignIn from './Routes/SignIn';
import Place from './Routes/Place';
import FullMap from './Routes/FullMap';


const iconMap = {
    search: 'search',
    favorites: 'heart',
    preferences: 'sliders'
};

export default class MyRouter extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        return (
            <Router>
                <Scene key="modal" component={Modal}>
                    <Scene key="root">
                        <Scene key="tabbar" tabs tabBarStyle={STYLES.tabBar} hideNavBar>
                            <Scene
                            key="tab1"
                                title="Search"
                                icon={TabIcon}
                                navigationBarStyle={{ backgroundColor: primaryColor }}
                                titleStyle={{ color: 'white', fontFamily: 'Montserrat-Light' }}
                                rightButtonImage={require('../../images/person_white.png')}
                                rightButtonIconStyle={{ height: 30, width: 30 }}
                                onRight={() => {}}
                            >
                                <Scene initial key="search" component={Search} title="Search" />
                                <Scene key="place1" component={Place} title="Place" />
                                <Scene key="suggestions" component={Suggestions} title="Suggestions" />
                            </Scene>

                            <Scene
                                key="tab2"
                                title="Favorites"
                                icon={TabIcon}
                                navigationBarStyle={{ backgroundColor: primaryColor }}
                                titleStyle={{ color: 'white', fontFamily: 'Montserrat-Light' }}
                                rightButtonImage={require('../../images/person_white.png')}
                                rightButtonIconStyle={{ height: 30, width: 30 }}
                                onRight={() => {}}
                            >
                                <Scene key="favorites" component={Favorites} title="Favorites" />
                                <Scene key="place2" component={Search} title="Search" />
                            </Scene>

                            <Scene
                                key="tab3"
                                title="Preferences"
                                icon={TabIcon}
                                navigationBarStyle={{ backgroundColor: primaryColor }}
                                titleStyle={{ color: 'white', fontFamily: 'Montserrat-Light' }}
                                rightButtonImage={require('../../images/person_white.png')}
                                rightButtonIconStyle={{ height: 30, width: 30 }}
                                onRight={() => {}}
                            >
                                <Scene key="preferences" component={Preferences} title="Preferences" />
                                <Scene key="place3" component={Search} title="Search" />
                            </Scene>
                        </Scene>
                        <Scene key="fullmap" component={FullMap} title="Map" />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

class TabIcon extends React.Component {
    render() {
        return (
            <View
                style={{
                    height: 20, justifyContent: 'center', alignItems: 'center'
                }}
            >
                <Icon
                    name={iconMap[this.props.title.toLowerCase()]}
                    size={25}
                    style={{ color: this.props.selected ? primaryColor :'grey' }}
                />
                <Text
                    style={{
                        color: this.props.selected ? primaryColor :'grey',
                        fontFamily: 'Montserrat-Light'
                    }}
                >
                    {this.props.title}
                </Text>
            </View>
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
