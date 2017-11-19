import React, {Component} from 'react';

import {
	Text,
	View,
  StyleSheet
} from 'react-native';

export default class ProgressBar extends React.Component {
  render(){
    return (
      <View>
        <Text style={styles.mytext} >Progress Bar extern XD XD</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mytext: {
    color: 'white'
  }
})