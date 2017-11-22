import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default class HeroesView extends React.Component {
  /*static navigationOptions = {
    title: 'Heroes',
    headerTintColor: 'white',
        headerStyle:{
        backgroundColor: '#4CAF50', 
    }
  };*/
    render(){
      return (
        <View style={styles.wrapper}>
          <Text>Heroes View</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  wrapper: {
      padding: 20
  }
});