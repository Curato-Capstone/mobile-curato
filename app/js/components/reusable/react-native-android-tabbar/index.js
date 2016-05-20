import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Dimensions,
  Image
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class AndroidTabBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selected: props.defaultPage
      };
  }

  _getTextStyle(item, middleButton) {
    let textStyle = {
        color: this.state.selected === item ? 'white' : '#9E9E9E',
        fontFamily: 'Roboto',
        textAlign: 'center'
    }
    if (middleButton) {
      textStyle.marginLeft = 10;
      textStyle.fontWeight = 'bold';
    }
    return textStyle;
  }

  _onPressButton(item) {
      this.setState({selected: item})
  }

  render() {
    let {buttons, type, primaryColor, secondaryColor, children, defaultPage} = this.props;
    let numTabs = buttons.length;
    let allNodes = [];
    let buttonNode = [];

    let middleButton = type === 'middle';

    let tabStyle = {
      width: middleButton ? SCREEN_WIDTH / (numTabs - 1) : SCREEN_WIDTH / numTabs,
      backgroundColor: primaryColor,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }

    let circleStyle = {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      backgroundColor: secondaryColor,
      justifyContent: 'center',
      alignItems: 'center'
    }

    if (middleButton) {
      tabStyle.flexDirection = 'row';
      tabStyle.flexWrap = 'wrap';
    }


    for (let item in buttons) {
      if (parseInt(item) === 1 && middleButton) {
        buttonNode.push(
          <TouchableNativeFeedback
            onPress={this._onPressButton.bind(this, parseInt(item))}
            background={TouchableNativeFeedback.Ripple()}
            key={item}>
              <View key={item} style={circleStyle}>
                <Image source={{uri: buttons[item].uri}}
                  style={{width: 40, height: 40}} />
              </View>
          </TouchableNativeFeedback>)

      } else {
        allNodes.push(
          <TouchableNativeFeedback
            onPress={this._onPressButton.bind(this, parseInt(item))}
            background={TouchableNativeFeedback.Ripple()}
            key={item}>
              <View style={tabStyle}>
              <Image source={{uri: buttons[item].uri}} style={{width: 24, height: 24}} />
                <Text style={this._getTextStyle(parseInt(item), middleButton)}>
                  {middleButton ?
                    buttons[item].name.toUpperCase() :
                    buttons[item].name}
                </Text>
              </View>
          </TouchableNativeFeedback>)
        }
    }

    let renderedButtonNode = (
      <View style={{position: 'absolute',
        left: SCREEN_WIDTH / 2 - 30,
        right: SCREEN_WIDTH / 2 - 30,
        bottom: 10}}>
          {buttonNode}
      </View>
    );

    return (
      <View style={{flex:1}}>
        {children[this.state.selected]}
        <View style={styles.container}>
          <View style={styles.container}>
            {allNodes}
          </View>
          {buttonNode.length === 0 ? null : renderedButtonNode}
        </View>
      </View>
    );
  }
}


AndroidTabBar.propTypes = {
  type: React.PropTypes.oneOf(['middle', 'ios']),
  buttons: React.PropTypes.array.isRequired,
  primaryColor: React.PropTypes.string,
  secondaryColor: React.PropTypes.string,
  defaultPage: React.PropTypes.number.isRequired
}

AndroidTabBar.defaultProps = {
  type: 'ios' ,
  primaryColor: '#607D8B',
  secondaryColor: '#2196F3',
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    flexWrap:'wrap'
  }
});

module.exports = AndroidTabBar
