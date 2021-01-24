import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Drawer } from 'react-native-paper';
import { DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isIphoneX } from 'react-native-iphone-x-helper';

import LogoSvg from '~/Assets/Images/2490315.svg';

export const Container = styled.View`
    flex: 1;
    background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.View`
    background-color: red;
    justify-content: space-between;
`;

export const DrawerSection = styled(Drawer.Section)``;

export const MenuItem = styled(DrawerItem).attrs((props) => ({
    labelStyle: {
        color: props.theme.colors.text,
    },
}))``;

export const Icon = styled(Ionicons).attrs((props) => ({
    size: 22,
    color: props.theme.colors.text,
}))``;

export const LogoContainer = styled.View`
    background-color: ${(props) => props.theme.colors.accent};
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    flex-direction: row;

    ${isIphoneX() &&
    css`
        padding-top: 65px;
        margin-top: -65px;
    `};

    ${Platform.OS === 'android' &&
    css`
        margin-top: -5px;
    `}
`;

export const Logo = styled(LogoSvg).attrs(() => ({
    width: 140,
    height: 110,
}))``;

export const LogoText = styled.Text`
    font-size: 28px;
    margin-top: 15px;
    color: #fff;
    margin-left: -10px;
`;
