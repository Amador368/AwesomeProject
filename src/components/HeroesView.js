import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

export default class HeroesView extends React.Component {
  static navigationOptions = {
    title: 'Heroes',
    headerTintColor: 'white',
        headerStyle:{
        backgroundColor: '#4CAF50', 
    }
  };
    render(){
      return (
        <View>
          <Text>Heroes View</Text>
        </View>
      )
    }
}