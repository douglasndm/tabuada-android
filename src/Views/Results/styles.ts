import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const AdContainer = styled.View`
    align-items: center;
    margin: 1px;

    display: ${(props) => (props.displayAd ? 'flex' : 'none')};
    opacity: ${(props) => (props.displayAd ? 100 : 0)};
`;
