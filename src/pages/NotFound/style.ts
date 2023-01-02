import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.color.primary};
`;
