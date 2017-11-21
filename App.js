import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableOpacity, Button, AppRegistry, FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginView from './src/components/loginView';
import DashboardView from './src/components/dashboardView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#E91E63',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  mybutton: {
   marginTop: 10,
   //color: '#007AFF'
  },
  welcome: {
    color: '#fff'
  },
  navigator: {
    backgroundColor: '#FFF'
  }
});

const myscreens = StackNavigator({
  Login: { screen: LoginView },
  Dashboard: { screen: DashboardView }
}
);

AppRegistry.registerComponent('AwesomeProject', () => myscreens);
//AppRegistry.registerComponent('AwesomeProject', () => App);
