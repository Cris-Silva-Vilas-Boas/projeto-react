import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
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
        width: 150px;
        justify-content: center;
        background-color: ${props => props.theme.color.warning};
        font-size: 20px;
        border-radius: 5px;
        text-align: center;
    }
`;

export const TitlePage = styled.h1`
    margin-bottom: 40px;
    color: ${props => props.theme.color.white}; 
    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.warning};  
    }
`;