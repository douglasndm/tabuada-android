import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import { Alert } from 'react-native';
import { Container, TextInput, Button, ButtonText } from './styles';

export default ({ navigation, ...props }) => {
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

    const theme = useTheme();

    return (
        <Container style={{ backgroundColor: theme.colors.background }}>
            <TextInput
                spellCheck={false}
                keyboardType="numeric"
                placeholder="Tabuada de qual número?"
                value={String(numTabuar)}
                onChangeText={(value) => setNumTabuar(value)}
                placeholderTextColor={theme.colors.inputText}
                style={{
                    backgroundColor: theme.colors.inputBackground,
                    color: theme.colors.inputText,
                }}
            />

            <TextInput
                spellCheck={false}
                keyboardType="numeric"
                placeholder="Tabuada até qual número?"
                value={String(numVezes)}
                onChangeText={(value) => setNumVezes(value)}
                placeholderTextColor={theme.colors.inputText}
                style={{
                    backgroundColor: theme.colors.inputBackground,
                    color: theme.colors.inputText,
                }}
            />
            <Button
                onPress={handleButtonClick}
                style={{ backgroundColor: theme.colors.accent }}
            >
                <ButtonText style={{ color: theme.colors.text }}>
                    Calcular
                </ButtonText>
            </Button>
        </Container>
    );
};
