import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableOpacity, Button, AppRegistry, FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginView from './src/components/loginView';
//import DashboardView from './src/components/dashboardView';
import Viewer from './src/components/viewer';

export default class App extends React.Component {

  static navigationOptions = {
    title : 'Home',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };
  constructor(){
    super()
    this.state = {
      data: [
        {name: 'Dave'}, {name: 'Bob'}
      ]
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TouchableOpacity style={styles.mybutton} onPress={() =>navigate('Viewer', {name: 'Ash'}) } >
          <Text style={styles.mytext}>Login xs</Text>
          
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
  Home: { screen: App },
  Viewer: { screen: Viewer }
});

AppRegistry.registerComponent('AwesomeProject', () => myscreens);
