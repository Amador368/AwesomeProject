import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';

export default class comicDetailView extends React.Component {

  constructor(props){
    super(props)
    //this.passProps = this.props.route.passProps 
  }
  static navigationOptions = {
    title: 'Detail Comic',
    headerTintColor: 'white',
        headerStyle:{
        backgroundColor: '#4CAF50', 
    }
  };
    render(){
      const {state} = this.props.navigation;
      return (
        <View>
          <Text>Name: {state.params.comic.name}</Text>
        </View>
      )
    }
}