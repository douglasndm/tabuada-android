import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from '~/Views/Home';
import Results from '~/Views/Results';
import Settings from '~/Views/Settings';
import About from '~/Views/About';

import TrackingPermission from '~/Views/Permissions/AppleATT';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />

        {Platform.OS === 'ios' && (
            <Stack.Screen
                name="TrackingPermission"
                component={TrackingPermission}
            />
        )}
    </Stack.Navigator>
);

export default Routes;
