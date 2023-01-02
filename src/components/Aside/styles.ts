import styled, { css } from 'styled-components';


interface IContainerProps{
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}


export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    padding-left: 20px;
    border-right: 1px solid ${props =>props.theme.color.gray};
    background-color: ${props => props.theme.color.secondary};
    position: relative;
    
    @media(max-width: 500px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;
        width: 170px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        width: 200px;
        
        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.color.secondary};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;

`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
    @media(max-width: 600px){        
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 10px;
    
    @media(max-width: 600px){
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.color.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 7px 0;
    display: flex;
    align-items: center;

    &:hover{
        opacity: .7;
    }
    
    > svg{
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.color.info};
    border: none;
    background: none;
    transition: opacity .3s;
    margin: 7px 0;
    display: flex;
    align-items: center;

    &:hover{
        opacity: .7;
    }
    
    > svg{
        font-size: 18px;
        margin-right: 5px;
    }
`;


export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.color.warning};
    color: ${props => props.theme.color.white};
    transition: opacity .3s;
    &:hover{
        opacity: 0.7;
    }
    display: none;
    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;
    
    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;