import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from './Views/Home';
import Results from './Views/Results';

const StackNavigator = createNativeStackNavigator();

const Routes: React.FC = () => (
    <>
        <StatusBar backgroundColor="#00bfff" translucent />

        <StackNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#00bfff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 24,
                },
            }}
        >
            <StackNavigator.Screen
                name="home"
                component={Home}
                options={{ title: 'Tabuada' }}
            />

            <StackNavigator.Screen
                name="results"
                component={Results}
                options={{
                    title: 'Resultados',
                    headerTitleStyle: { textAlign: 'left' },
                }}
            />
        </StackNavigator.Navigator>
    </>
);

export default Routes;
