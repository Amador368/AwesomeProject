import React, {Component} from 'react';

import {
    View, Text, TouchableHighlight,TouchableOpacity, Alert, StyleSheet
} from 'react-native'

export default class loginView extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={(this.onLogin.bind(this))} style={styles.mybutton}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
   
    aceptar(){

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
    mybutton: {
        width: 300,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1
    }
  })