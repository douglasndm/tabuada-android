import 'react-native-gesture-handler';
import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob'

import Routes from './routes';

export default function() {

    // Seta as configurações defaults para todos os ads no app
    admob().setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.G,
        tagForChildDirectedTreatment: false,
        tagForUnderAgeOfConsent:false
    })

    const colorScheme = useColorScheme();

    return (
        <AppearanceProvider>
            <Routes theme={colorScheme} />
        </AppearanceProvider>
    );
}
