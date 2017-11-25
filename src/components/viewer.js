import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TouchableOpacity} from 'react-native';
export default class Viewer extends React.Component {
 
    render() { 
      return(
       <View style={styles.container}>
          <Text style={styles.mytext}>Viewer</Text>
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