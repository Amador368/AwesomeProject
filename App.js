import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from './progressBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar/>
        <Text style={styles.welcome} >Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Santiago xd xd</Text>
        <Text>React Js Developer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#fff'
  } 
});
