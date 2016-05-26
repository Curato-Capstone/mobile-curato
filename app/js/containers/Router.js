// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Scene, Router, Modal, Actions as RouterActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColor } from '../utils/colors';

import Account from './Routes/Account';
import Intro from './Routes/Intro';
import Search from './Routes/Search';
import Favorites from './Routes/Favorites';
import Preferences from './Routes/Preferences';
import Suggestions from './Routes/Suggestions';
import SignIn from './Routes/SignIn';
import Place from './Routes/Place';
import FullMap from './Routes/FullMap';
import PreferencesIntro from './Routes/PreferencesIntro';
import BaselineSuggestions from './Routes/BaselineSuggestions';
import SignUp from './Routes/SignUp';


const iconMap = {
    search: 'search',
    favorites: 'heart',
    preferences: 'sliders'
};

const sceneProps = {
    navigationBarStyle: { backgroundColor: primaryColor },
    titleStyle: { color: 'white', fontFamily: 'Montserrat-Light' },
    rightButtonImage: require('../../images/person_white.png'),
    rightButtonIconStyle: { height: 30, width: 30 },
    backButtonImage: require('../../images/back_chevron_white.png'),
    backButtonIconStyle: { height: 30, width: 30 }
};

export default class MyRouter extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        return (
            <Router>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar>
                        <Scene key="tabbar" tabs tabBarStyle={STYLES.tabBar}  hideNavBar type="reset">
                            <Scene
                                key="tab1"
                                title="Search"
                                onRight={() => RouterActions.account1()}
                                icon={TabIcon}
                                {...sceneProps}
                            >
                                <Scene key="search" component={Search} title="Search" />
                                <Scene key="place1" component={Place} title="Place" />
                                <Scene key="suggestions" component={Suggestions} title="Suggestions" />
                                <Scene key="account1" component={Account} title="Account" hideTabBar />
                            </Scene>

                            <Scene
                                key="tab2"
                                title="Favorites"
                                icon={TabIcon}
                                onRight={() => RouterActions.account2()}
                                {...sceneProps}
                            >
                                <Scene key="favorites" component={Favorites} title="Favorites" />
                                <Scene key="place2" component={Search} title="Search" />
                                <Scene key="account2" component={Account} title="Account" hideTabBar />
                            </Scene>

                            <Scene
                                key="tab3"
                                title="Preferences"
                                icon={TabIcon}
                                onRight={() => RouterActions.account3()}
                                {...sceneProps}
                            >
                                <Scene key="preferences" component={Preferences} title="Preferences" />
                                <Scene key="place3" component={Search} title="Search" />
                                <Scene key="account3" component={Account} title="Account" hideTabBar />
                            </Scene>
                        </Scene>
                        <Scene initial key="intro" component={Intro} type='reset' />
                        <Scene key="signin" component={SignIn} />
                        <Scene key="prefIntro" component={PreferencesIntro} />
                        <Scene key="baselineSugg" component={BaselineSuggestions} />
                        <Scene key="signup" component={SignUp} />
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
