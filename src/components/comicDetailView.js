import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet
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
        <View style={styles.container}>
          <Image source={{uri: state.params.comic.thumbnail.path+'.jpg'}}
            style={styles.image} />
            <View style={styles.wrapper} >
              <Text style={styles.title}>Name: {state.params.comic.name}</Text>
              <Text style={styles.description}>{state.params.comic.description}</Text>
              <Text style={styles.description}>Disponibles: {state.params.comic.comics.available}</Text>
              <Text style={styles.modified}>Modificado: {state.params.comic.modified}</Text>
            </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  container: {
    //marginTop: 63,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize:23,
    color: '#007AFF'
  },
  description:{
    marginTop:10,
    fontSize: 16,
  },
  modified:{
   marginTop: 10,
   fontSize:16,
   color: '#007AFF',
  },
  image: {
    alignSelf: 'stretch',
    height: 300,
  },
});