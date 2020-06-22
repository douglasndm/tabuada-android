import React from 'react';

import {Container, TextInput, Button, ButtonText} from './styles';

export default function() {
    return (
        <Container>
            <TextInput
                spellCheck={false}
                keyboardType="numeric"
                placeholder="Tabuada de qual número?"
            />

            <TextInput
                spellCheck={false}
                keyboardType="numeric"
                placeholder="Exibir quantos resultados?"
            />
            <Button>
                <ButtonText>Calcular</ButtonText>
            </Button>
        </Container>
    );
}
