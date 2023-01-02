import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    color: ${props => props.theme.color.white};
    transition: opacity .3s;
    background-color:${props => props.theme.color.warning};
    &:hover{
        opacity: .7;
    }
`;
