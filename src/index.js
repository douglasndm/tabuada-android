import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import './Services/Admob';

import Themes from './Themes';

import Routes from './routes';

const theme = Themes.Dark;

export default () => {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </Provider>
    );
};
