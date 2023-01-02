import styled from 'styled-components';

export const Container = styled.div`
    height: 70vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.color.primary};
    a {
        color: ${props => props.theme.color.white};
        text-decoration: none;
        transition: opacity .3s;
        margin: 60px 0;
        display: flex;
        height: 30px;
        width: 300px;
        justify-content: center;
        background-color: ${props => props.theme.color.warning};
        font-size: 20px;
        border-radius: 5px;
        text-align: center;
    }
`;

export const BoxDragon = styled.div`
    width: 350px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.color.tertiary};
`;

export const Title = styled.h1`
    margin-bottom: 50px;
    color: ${props => props.theme.color.white}; 
    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.warning};  
    }
`;


