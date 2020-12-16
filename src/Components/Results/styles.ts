import styled from 'styled-components/native';

export const ResultItem = styled.View`
    display: flex;
    align-self: center;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 30px;
    padding-bottom: 7px;

    width: 90%;

    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.theme.colors.subText};
`;
export const ResultText = styled.Text`
    font-size: 18px;
    font-weight: 100;

    color: ${(props) => props.theme.colors.text};
`;