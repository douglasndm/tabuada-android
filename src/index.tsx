import * as Sentry from '@sentry/react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EnvConfig from 'react-native-config';
import { ThemeProvider } from 'styled-components/native';
import './Services/Admob';

import { GetTheme } from './Themes';

import Routes from './routes';

Sentry.init({
    dsn: EnvConfig.SENTRY_DSN,
});

const theme = GetTheme();

export default () => (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </ThemeProvider>
);
