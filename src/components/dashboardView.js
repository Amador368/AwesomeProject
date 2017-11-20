import React, {Component} from 'react';

import {
    View, Text, TouchableOpacity
} from 'react-native'

export default class dashboardView extends React.Component{
    static navigationOptions = {
        title: 'Dashboard'
    };
    render(){
        var {params} = this.props.navigation.state;
        return(
            <View>
                <Text> This is the dashboard</Text>
                <Text>the param is: {params.name}</Text>
            </View>
        )
    }
}