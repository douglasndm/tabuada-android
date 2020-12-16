import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Container, TextInput, Button, ButtonText } from './styles';

export default () => {
    const navigation = useNavigation();

    const [numTabuar, setNumTabuar] = useState('');
    const [numVezes, setNumVezes] = useState('');

    function handleButtonClick() {
        if (!numTabuar || !numVezes || numTabuar < 0 || numVezes < 0) {
            return Alert.alert('Verifique os dados digitados');
        }

        navigation.navigate('results', {
            numTabuar,
            numVezes,
        });
    }

    return (
        <Container>
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
        </Container>
    );
};
