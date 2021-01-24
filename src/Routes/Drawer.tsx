import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerMenu from '~/Components/Drawer';

import Routes from '.';

const Drawer = createDrawerNavigator();

const DrawerContainer: React.FC = () => (
    <Drawer.Navigator
        drawerType="slide"
        openByDefault={false}
        keyboardDismissMode="on-drag"
        initialRouteName="Home"
        drawerContent={(props) => <DrawerMenu {...props} />}
    >
        <Drawer.Screen name="MainPage" component={Routes} />
    </Drawer.Navigator>
);

export default DrawerContainer;
