import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainPage from './Views/MainPage';

const StackNavigator = createStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#00bfff'} translucent={true} />

            <StackNavigator.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#00bfff',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontWeight: 'bold', textAlign: 'center'},
                }}>
                <StackNavigator.Screen
                    name="Home"
                    component={MainPage}
                    options={{title: 'Tabuada'}}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}
