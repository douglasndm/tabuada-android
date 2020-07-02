import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { lighten, darken } from 'polished';

export const light = {
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            lowBorder: ' rgba(0,0,0,.1)',
            foreground: '#00bfff'
    },
};

export const dark = {
        dark: true,
        colors: {
            ...DarkTheme.colors,
            background: '#1f1f1f',
            text: '#fff',
            lowBorder: 'rgba(255,255,255,.4)',
            foreground: darken(0.05, '#00bfff')
    },
}

