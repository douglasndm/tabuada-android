import styled, { css } from 'styled-components/native';

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
interface InputTextContainerProps {
    hasError?: boolean;
}

export const InputTextContainer = styled.View<InputTextContainerProps>`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.inputText};
    margin-bottom: 10px;

    ${(props) =>
        props.hasError &&
        css`
            border: 2px solid red;
        `}
`;

export const InputText = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.subText,
}))`
    padding: 15px 5px 15px 15px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
`;
export const InputTextTip = styled.Text`
    color: red;
    margin: -5px 10px 5px;
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
