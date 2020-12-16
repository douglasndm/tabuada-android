import 'react-native-gesture-handler';
import React from 'react';
import CodePush, { CodePushOptions } from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import './Services/Admob';

import { GetTheme } from './Themes';

import Routes from './routes';

const theme = GetTheme();

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </ThemeProvider>
);

const codePushOptions: CodePushOptions = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    installMode: CodePush.InstallMode.ON_NEXT_RESUME,
};

export default CodePush(codePushOptions)(App);
