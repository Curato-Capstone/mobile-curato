import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import request from 'superagent-bluebird-promise';
import { user as userActions, global as globalActions } from '../../modules/index';

class Place extends Component {
    static defaultProps = {};
    props: {
        actions: Object,
        suggestions: Array<Object>,
        favorites: Array<Object>
    };

    state = { place: null };
    state : { place: Object };

    componentWillMount() {
        const { actions, suggestions } = this.props;
        const id = '4bbfac50f8219c742968b010';

        actions.setLoading(true);
        for (let i = 0; i < suggestions.length; i++) {
            if (suggestions[i].id === id) {
                this.setState({ place: suggestions[i] });
                actions.setLoading(false);
                return;
            }
        }

        request
            .get(`http://ec2-52-38-203-54.us-west-2.compute.amazonaws.com:5000/place/${id}`)
            .then((res) => {
                actions.setLoading(false);
                this.setState({ place: res.body });
            });
    }

    render() {
        const { place } = this.state;
        console.log(place)
        if (place) {
            return (
                <View style={STYLES.container}>
                    <Image
                        style={STYLES.placeImage}
                        source={{ uri: place.image }}
                    />
                    <Text>{place.description}</Text>
                </View>
            );
        }
        return null;
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginTop: 60
    },

    placeImage: {
        flex: 1,
        height: 100
    }
});

function mapStateToProps(state) {
    const places =  state.get('places').toJS();

    return {
        suggestions: state.getIn(['suggestions', 'suggestions']).toJS().map((id) => places[id]),
        favorites: state.getIn(['user', 'favorites']).toJS(),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...userActions,
            ...globalActions,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);
