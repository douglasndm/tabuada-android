import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const InputContainer = styled.View`
    width: 100%;
    padding: 0 10%;
    margin-bottom: 20px;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.subText,
}))`
    background-color: ${(props) => props.theme.colors.inputBackground};
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 15px;
`;

export const Button = styled.TouchableOpacity`
    display: flex;

    align-items: center;
    align-self: center;

    background-color: ${(props) => props.theme.colors.accent};
    padding: 20px;
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    color: white;
`;
