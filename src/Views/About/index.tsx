import React, { useCallback } from 'react';
import { View, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getVersion } from 'react-native-device-info';

import BackButton from '~/Components/BackButton';

import {
    Container,
    Content,
    PageTitle,
    ApplicationVersion,
    AboutSection,
    ApplicationName,
    Text,
    Link,
} from './styles';

const About: React.FC = () => {
    const { goBack } = useNavigation();

    const handleLinkedinPress = useCallback(async () => {
        await Linking.openURL('https://www.linkedin.com/in/douglasndm/');
    }, []);

    const handleDonatePress = useCallback(async () => {
        await Linking.openURL(
            'https://www.paypal.com/donate?hosted_button_id=L68N3E8YGSTW2'
        );
    }, []);

    const iconsUrl = useCallback(async () => {
        await Linking.openURL('https://www.flaticon.com/authors/smashicons');
    }, []);

    return (
        <Container>
            <Content>
                <BackButton handleOnPress={goBack} />
                <PageTitle>Sobre</PageTitle>
            </Content>

            <AboutSection>
                <ApplicationName>Tabuada</ApplicationName>
                <ApplicationVersion>
                    {`Versão: ${getVersion()}`}
                </ApplicationVersion>
            </AboutSection>

            <AboutSection>
                <Text>Criado por Douglas Nunes de Mattos</Text>
                <Link onPress={handleLinkedinPress}>Linkedin</Link>
            </AboutSection>

            <AboutSection>
                <Text>
                    Ajude o aplicativo a continuar evoluindo doando qualquer
                    valor
                </Text>
                <Link onPress={handleDonatePress}>Doar</Link>
            </AboutSection>

            <AboutSection>
                <Text>Icons made by Smashicons from www.flaticon.com</Text>

                <View>
                    <Link onPress={iconsUrl}>
                        https://www.flaticon.com/authors/srip
                    </Link>
                </View>
            </AboutSection>
        </Container>
    );
};

export default About;
