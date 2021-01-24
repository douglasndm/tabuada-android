import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/Views/Home';
import Results from '~/Views/Results';
import About from '~/Views/About';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
);

export default Routes;
