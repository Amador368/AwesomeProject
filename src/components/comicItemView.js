import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, ListView, Image, StyleSheet
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import comicDetailView from './comicDetailView';

class comicItemView extends React.Component {
    static navigationOptions = {
        header: null,
        headerMode: 'screen'
    };

    render(){
    //var {navigate } = this.props.navigation;
    //var {comic} = this.props.comic;
      return (
          <View>
        <TouchableOpacity onPress={() => navigate('comicDetailView', {name: 'Ash'}) }>
               <Image source={{uri: comic.thumbnail.path+'.jpg'}} style={styles.backgroundImage}>
                   <View style={styles.rightContainer}>
                        <Text style={styles.title}>{comic.name}</Text>
                        <Text style={styles.available}>{comic.comics.available}</Text>
                   </View>
               </Image>
        </TouchableOpacity>
          </View>

      )
    }
}

const myscreens = StackNavigator({
    comicItemView: { screen: comicItemView },
    comicDetailView: { screen: comicDetailView }

});

const styles = StyleSheet.create({
    mytext: {
      color: 'white'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 27,
        marginBottom: 8,
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: 'rgba(52,52,52,0)',
    },
    listView:{
        //paddingTop: 64,
        //marginBottom: 49,
    },
    available: {
        fontSize:18,
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor:'rgba(52,52,52,0)',
    },
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height:150,
    },
    rightContainer: {
        backgroundColor:'rgba(52,52,52,0.5)',
        alignSelf: 'stretch',
        paddingTop:30,
        height: 150,
    }

  })

export default myscreens;