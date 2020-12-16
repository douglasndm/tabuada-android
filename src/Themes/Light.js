import { DefaultTheme } from 'react-native-paper';

export default {
    name: 'light',

    ...DefaultTheme,
    dark: false,
    mode: 'exact',
    roundness: 12,

    colors: {
        background: '#EAEAEA',
        text: '#000',
        subText: '#363636',

        accent: '#00bfff',

        inputBackground: '#dbdbdb',
    },
};
