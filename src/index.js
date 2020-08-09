import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import './Services/Admob';

import { GetTheme } from './Themes';

import Routes from './routes';

const theme = GetTheme();

export default () => {
    return (
        <Provider theme={theme}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};
