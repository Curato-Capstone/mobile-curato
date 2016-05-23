import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AndroidTabBar from '../components/reusable/react-native-android-tabbar';
import Loading from '../components/reusable/Loading/Loading';
import MessageBar from '../components/reusable/MessageBar/MessageBar';

// import ButtonExample from '../components/reusable/Button/Example';
// import SliderExample from '../components/reusable/Slider/Example';
// import InputExample from '../components/reusable/Input/Example';

class App extends Component {
    static defaultProps = {};
    props: {
        children: Array<any>
    };
    state : void;

    render() {
        return (
            <View style={STYLES.container}>
                {this.renderComponents()}
            </View>
        );
    }

    renderComponents() {
        return (
            <View style={STYLES.app}>
                {this.renderLoading()}
                {this.renderMessageBar()}
                {this.renderRoute()}
            </View>
        );
    }

    renderRoute() {
        return (
            <View style={STYLES.route}>
                {this.props.children.map((child) => <child.component key={child.key} />)}
            </View>
        );
    }

    renderLoading() {
        const { global } = this.props;

        if (global.get('loading')) {
            return <Loading />;
        }
    }

    renderMessageBar() {
        const { global } = this.props;
        const { errorMessage, successMessage } = global;

        if (errorMessage) {
            return <MessageBar type="error" message={errorMesage} />;
        } else if (successMessage) {
            return <MessageBar type="success" message={successMessage} />;
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        // backgroundColor: '#F6F6F6',
    },

    app: {
        flex: 1
    },

    route: {
        flex: 1,
        marginTop: 70
    }
});

function mapStateToProps(state, ownProps) {
    return {
        user: state.get('user'),
        suggestions: state.get('suggestions'),
        global: state.get('global'),
        auth: state.get('auth'),
        location: ownProps.location
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
