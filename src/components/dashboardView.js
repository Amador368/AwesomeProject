import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import HeroesView from './HeroesView';

import {
    View, Text, TouchableOpacity
} from 'react-native';

class dashboardView extends React.Component{
    static navigationOptions = {
        title: 'Dashboard',
        headerTintColor: 'white',
            headerStyle:{
            backgroundColor: '#4CAF50', 
        }
    };

    render(){
        var {params} = this.props.navigation.state;
        return(
            <View>
                <Text> This is the dashboard</Text>
                <Text>the param is: {params.name}</Text>
                <Text></Text>
            </View>
        )
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

export default tabNavigator;