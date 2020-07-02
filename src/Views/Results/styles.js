import styled from 'styled-components/native';


export const AdContainer = styled.View`
    align-items: center;
    margin: 1px;

    display: ${props => props.displayAd ? 'flex' : 'none'};
    opacity: ${props => props.displayAd ? 100 : 0};
`;
