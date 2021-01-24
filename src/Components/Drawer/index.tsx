import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import {
    DrawerContentOptions,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
    Container,
    Content,
    DrawerSection,
    MenuItem,
    Icon,
    LogoContainer,
    Logo,
    LogoText,
} from './styles';

const DrawerMenu: React.FC<DrawerContentOptions> = (
    props: DrawerContentOptions
) => {
    const { navigation } = props;

    const handleNavigateToSite = useCallback(async () => {
        await Linking.openURL('https://douglasndm.dev');
    }, []);

    const handleNavigateToAbout = useCallback(() => {
        navigation.navigate('About');
    }, [navigation]);

    return (
        <Container>
            <DrawerContentScrollView {...props}>
                <LogoContainer>
                    <Logo />
                    <LogoText>Tabuada</LogoText>
                </LogoContainer>

                <DrawerSection>
                    <MenuItem
                        icon={() => <Icon name="home" />}
                        label="Início"
                    />
                </DrawerSection>
            </DrawerContentScrollView>

            <DrawerSection>
                <MenuItem
                    label="Mais aplicativos"
                    icon={() => <Icon name="globe-outline" />}
                    onPress={handleNavigateToSite}
                />
                <MenuItem
                    label="Sobre"
                    icon={() => <Icon name="help-circle-outline" />}
                    onPress={handleNavigateToAbout}
                />
            </DrawerSection>
        </Container>
    );
};

export default DrawerMenu;
