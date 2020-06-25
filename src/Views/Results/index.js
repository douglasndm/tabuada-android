import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, FlatList } from 'react-native';

import ResultsComponent from '../../components/results';


export default function ({ route, navigation }) {

    const { numTabuar } = route.params;
    const { numVezes } = route.params;

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: () => {
                let iconName;

                if (route.name === 'sumResults') {
                    iconName = 'plus';
                }
                else if(route.name === 'subtractResults'){
                    iconName = 'minus';
                }
                else if(route.name === 'multiplicationResults'){
                    iconName = 'times';
                }
                else if(route.name === 'divideResults'){
                    iconName = 'plus';
                }
                else if(route.name === 'modResults'){
                    iconName = 'plus';
                }
                else if(route.name === 'squareRootResults'){
                    iconName = 'plus';
                }

                return <FontAwesome name={iconName} size={14} color={'black'} />
            },

        })}>


            <Tab.Screen
                name="sumResults"
                options={{ tabBarLabel: "Soma" }}
                component={ResultsComponent}
                initialParams={{ resultType: "sum", numTabuar, numVezes }} />

            <Tab.Screen
                name="subtractResults"
                options={{ tabBarLabel: 'Subtração' }}
                component={ResultsComponent}
                initialParams={{ resultType: "sub", numTabuar, numVezes }} />

            <Tab.Screen
                name="multiplicationResults"
                options={{ tabBarLabel: 'Multiplicação' }}
                component={ResultsComponent}
                initialParams={{ resultType: "multi", numTabuar, numVezes }} />

            <Tab.Screen
                name="divideResults"
                options={{ tabBarLabel: 'Divisão' }}
                component={ResultsComponent}
                initialParams={{ resultType: "divide", numTabuar, numVezes }} />

            <Tab.Screen
                name="squareRootResults"
                options={{ tabBarLabel: 'Raiz quadrada' }}
                component={ResultsComponent}
                initialParams={{ resultType: "square", numTabuar, numVezes }} />


        </Tab.Navigator>
    );
}
