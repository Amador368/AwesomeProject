import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import HeroesView from './HeroesView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Crypto from 'crypto-js';

import {
    View, Text, TouchableOpacity, ListView, Image, StyleSheet
} from 'react-native';

const REQUEST_URL = 'http://gateway.marvel.com/v1/public/characters';

class dashboardView extends React.Component{

    constructor(props){
        super(props)
        this.timestamp = 1;
        this.public_key = '6da6b71b5a6c4517d44ec2b5abe45ac7';
        this.private_key = '9ae81d15dad81c94417d0148dae4d845dc4f68ee';
        
        this.state = {
           dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
           }),
           loaded: false
        }
    }
    static navigationOptions = {
        title: 'Dashboard',
        headerTintColor: 'white',
            headerStyle:{
            backgroundColor: '#4CAF50', 
        }
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key);
        fetch(REQUEST_URL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
            loaded: true
          })
        })
    }

    renderLoadingView(){
        return(
            <View style={styles.container} >
                <Text>Cargando...</Text>
            </View>
        )
    }

    renderComic(comic){
        return (
            <TouchableOpacity>
               <Image source={{uri: comic.thumbnail.path+'.jpg'}} style={styles.backgroundImage}>
                   <View style={styles.rightContainer}>
                        <Text style={styles.title}>{comic.name}</Text>
                        <Text style={styles.available}>{comic.comics.available}</Text>
                   </View>
               </Image>
            </TouchableOpacity>
        )
    }

    render(){
        //var {params} = this.props.navigation.state;
        if(!this.state.loaded){
            return (
                <View style={styles.container} >
                    <Text>Cargando...</Text>
                </View>
            )
        } else {
            return(
                <ListView
                    dataSource = {this.state.dataSource }
                    renderRow =  {this.renderComic.bind(this)}
                    style = {styles.listView}
                />
            )
        }

    }
}

const tabNavigator = TabNavigator({
    Dashboard: {
        screen: dashboardView,
    },
    Heroes: {
        screen: HeroesView,
    },
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

export default tabNavigator;