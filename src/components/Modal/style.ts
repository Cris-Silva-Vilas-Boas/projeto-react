import styled from "styled-components";


export const Container = styled.div`
    background-color: ${props => props.theme.color.gray};
    align-items: center;
    position: absolute;
    border-radius: 7px;
    display: block;
    left: 48.5%;
`;  

export const Modal = styled(Container)`
    position: fixed;
    width: 300px;
    color: ${props => props.theme.color.black};
    padding: 1.2rem;
    border-radius: 0.5rem;
    z-index: 10;

    left: auto;
    top: 40%;
    transform: translate(auto, -40%);
    @media(max-width: 600px){
        transform: translate(-50%, -50%);
    }
`;

export const Header = styled.h3`
    color: ${props => props.theme.color.black};
    font-size: 35px;
    line-height: 1em;
    font-weight: 300;
    margin: 5px 0 10px;
    text-align: center;
`; 

export const Message = styled.p`
    color: ${props => props.theme.color.black};
    font-size: 15px;
    font-weight: 500;
    margin: 0 0 36px;
    text-align: center;
`; 
