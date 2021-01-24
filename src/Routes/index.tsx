import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/Views/Home';
import Results from '~/Views/Results';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
);

export default Routes;
