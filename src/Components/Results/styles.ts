import styled from 'styled-components/native';

export const ResultItem = styled.View`
    justify-content: center;
    margin: 20px 10px 0 10px;

    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 7px;

    width: 90%;

    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.theme.colors.subText};
`;
export const ResultText = styled.Text`
    font-size: 17px;

    color: ${(props) => props.theme.colors.text};
`;
