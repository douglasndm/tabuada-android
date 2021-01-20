import React, { useState, useMemo } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import EnvConfig from 'react-native-config';

import {
    Container,
    InputContainer,
    TextInput,
    Button,
    ButtonText,
} from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const [numTabuar, setNumTabuar] = useState('');
    const [numVezes, setNumVezes] = useState('');

    function handleButtonClick() {
        if (!numTabuar || !numVezes || numTabuar < 0 || numVezes < 0) {
            return Alert.alert('Verifique os dados digitados');
        }

        navigation.navigate('results', {
            numberToCalc: numTabuar,
            howManyTimesCalc: numVezes,
        });
    }

    const adUnit = useMemo(() => {
        if (__DEV__) {
            return TestIds.BANNER;
        }

        if (Platform.OS === 'ios') {
            return EnvConfig.IOS_ADMOB_ADUNIT_HOMEBANNER;
        }

        return EnvConfig.ANDROID_ADMOB_ADUNIT_HOMEBANNER;
    }, []);

    return (
        <Container>
            <InputContainer>
                <TextInput
                    spellCheck={false}
                    keyboardType="numeric"
                    placeholder="Tabuada de qual número?"
                    value={String(numTabuar)}
                    onChangeText={(v) => {
                        const regex = /^[0-9\b]+$/;

                        if (v === '' || regex.test(v)) {
                            setNumTabuar(v);
                        }
                    }}
                />

                <TextInput
                    spellCheck={false}
                    keyboardType="numeric"
                    placeholder="Tabuada até qual número?"
                    value={String(numVezes)}
                    onChangeText={(v) => {
                        const regex = /^[0-9\b]+$/;

                        if (v === '' || regex.test(v)) {
                            setNumVezes(v);
                        }
                    }}
                />
                <Button onPress={handleButtonClick}>
                    <ButtonText>Calcular</ButtonText>
                </Button>
            </InputContainer>

            <BannerAd size={BannerAdSize.MEDIUM_RECTANGLE} unitId={adUnit} />
        </Container>
    );
};

export default Home;
