import styled, { css } from 'styled-components/native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

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
`;

export const PageTitle = styled.Text`
    font-size: 22px;
    color: #fff;
`;

export const AdContainer = styled.View`
    align-items: center;
    margin: 1px;
`;
