import { DefaultTheme } from 'react-native-paper';

export default {
    name: 'dark',

    ...DefaultTheme,
    dark: true,
    mode: 'exact',
    roundness: 12,

    colors: {
        background: 'rgba(0, 0, 0, 0.85)',
        text: '#fff',
        subText: '#EAEAEA',

        accent: '#00bfff',

        inputBackground: '#404040',
    },
};
