import React from 'react';
import DashboardView from './dashboardView';
import { StyleSheet, Text, View, Button, AppRegistry, TouchableOpacity} from 'react-native';
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
        //super()
    }
    render() {
      const {navigate} = this.props.navigation;
      return(
       <View style={styles.container}>
        <TouchableOpacity style={styles.mybutton} onPress={() =>navigate('DashboardView', {name: 'Ash'}) } >
          <Text style={styles.mytext}>to dashboard xs</Text>
        </TouchableOpacity>
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
  const myscreens = StackNavigator({
    DashboardView: { screen: DashboardView },
    //Viewer: { screen: Viewer }
  });
  //AppRegistry.registerComponent('AwesomeProject', () => myscreens);