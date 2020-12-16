import { Appearance } from 'react-native';
import Light from './Light';
import Dark from './Dark';

export function GetTheme() {
    if (Appearance.getColorScheme() === 'dark') {
        return Dark;
    }

    return Light;
}
