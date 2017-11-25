import React, {Component} from 'react';
import Viewer from './viewer';
import {DrawerNavigator} from 'react-navigation';

import {
	Text,
	View,
  StyleSheet
} from 'react-native';

class drawerNav extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render(){
    return (
      <View style={styles.wrapper}>
        <Text style={styles.mytext} >Drawer Navigation</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mytext: {
    color: 'black'
  },
  wrapper: {
    padding: 20
  }
});

const MyNav = DrawerNavigator({
  Home: {
    screen: drawerNav,
  },
  Notifications: {
    screen: Viewer,
  },
});

export default MyNav;
