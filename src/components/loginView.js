import React, {Component} from 'react';
import {
    View, Image, Text, TouchableHighlight,TouchableOpacity, Alert, StyleSheet
} from 'react-native'

export default class loginView extends React.Component{
    static navigationOptions = {
        title : 'Login'
    };

    render(){
        var {navigate } = this.props.navigation;
        return(
            <Image style={styles.container} source={{uri: 'https://images.unsplash.com/photo-1503606426878-b4727b846b8c?auto=format&fit=crop&w=1268&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}>
            <View>
                <TouchableOpacity style={styles.mybutton} onPress={() =>navigate('Dashboard', {name: 'Ash'}) }>
                    <Text style={styles.mytext}>to dashboard</Text>
                </TouchableOpacity>
            </View>
            </Image>
        )
    }
   
    aceptar(evt){
         console.log(evt)
    }
    cancelar(){
        
    }

    onLogin(){
        //console.log('login console')
        Alert.alert(
            'Acceso',
            'Logged in',
            [
                {text: 'aceptar',
                onPress: (this.aceptar.bind(this))
                },
                {text: 'cancelar',
                onPress: (this.aceptar.bind(this))
                }
            ]
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mybutton: {
        width: 300,
        height: 30,
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
    },
    mytext: {
        color: '#fff'
    }
  })