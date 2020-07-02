import 'react-native-gesture-handler';
import React from 'react';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob'
import Routes from './routes';

export default function() {

    admob().setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.G,
        tagForChildDirectedTreatment: false,
        tagForUnderAgeOfConsent:false
    })

    return <Routes />;
}
