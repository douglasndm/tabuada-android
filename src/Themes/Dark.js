import { DefaultTheme } from 'react-native-paper';

export default {
    name: 'dark',

    ...DefaultTheme,

    dark: true, // whether this is a dark theme or light theme.
    mode: 'exact',
    roundness: 12,

    colors: {
        primary: '#00bfff',
        accent: '#00bfff',
        background: 'rgba(0, 0, 0, 0.85)',
        text: '#fff',
        subText: '#EAEAEA',

        accent: '#00bfff',

        inputBackground: '#404040',
    },
};
