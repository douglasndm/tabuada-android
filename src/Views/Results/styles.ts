import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.colors.accent};
    padding-left: 10px;
    padding-bottom: 20px;

    ${isIphoneX() &&
    css`
        padding-top: ${getStatusBarHeight() + 20}px;
    `};

    ${Platform.OS === 'ios' &&
    !isIphoneX() &&
    css`
        padding-top: ${getStatusBarHeight() + 20}px;
    `}

    ${Platform.OS === 'android' &&
    css`
        padding-top: 20px;
    `}
`;

export const ButtonContainer = styled(RectButton).attrs((props) => ({
    rippleColor: props.theme.colors.accent,
}))`
    padding: 2px 7px;
    margin: 0 3px;
`;

export const BackButtonImage = styled(Ionicons).attrs((props) => ({
    name: 'arrow-back-outline',
    color: '#fff',
    size: 28,
}))``;

export const PageTitle = styled.Text`
    font-size: 22px;
    color: #fff;
`;

export const AdContainer = styled.View`
    align-items: center;
    margin: 1px;
`;
