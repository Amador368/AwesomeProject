import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Viewer extends React.Component {
    static navigationOptions = {
      title : 'Person viewer',
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTitleStyle: {
        color: '#fff'
      }
    };
    constructor(props){
        super(props)
    }
    render() {
      return(
       <View style={styles.container}>
        <Text style={styles.mytext}>{this.props.navigation.state.params.name}</Text>
       </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#E91E63',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    mytext: {
        fontSize: 40
    }
  });
