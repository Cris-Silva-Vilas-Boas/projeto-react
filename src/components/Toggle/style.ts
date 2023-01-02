import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.color.white}
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    () => ({
        onColor: "#F7931B",
        offColor:"#FF6961"
    }))<ReactSwitchProps>`
    margin: 0 7px;
`;