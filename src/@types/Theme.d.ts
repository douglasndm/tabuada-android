import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;

        colors: {
            primary: string;
            accent: string;
            background: string;
            text: string;
            subText: string;
            textAccent: string;

            inputText: string;
            inputBackground: string;
        };
    }
}

interface ITheme {
    name: string;

    colors: {
        primary: string;
        accent: string;
        background: string;
        text: string;
        subText: string;
        textAccent: string;

        inputText: string;
        inputBackground: string;
    };
}
