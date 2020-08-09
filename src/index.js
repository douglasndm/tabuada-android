import * as Sentry from '@sentry/react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EnvConfig from 'react-native-config';
import { Provider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import './Services/Admob';

import { GetTheme } from './Themes';

import Routes from './routes';

Sentry.init({
    dsn: EnvConfig.SENTRY_DSN,
});

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
