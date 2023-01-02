import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.color.tertiary};
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    
        padding-left: 10px;    
    }
    > div span {
        font-size: 22px;
        font-weight: 500;
    }
    > div a{
        color: ${props => props.theme.color.white};
        text-decoration: none;
        transition: opacity .3s;
        margin: 7px 0;
        display: flex;
        font-size: 17px;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 13px;
    height: 60%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`;

export const Button =  styled.button`
    width: 100px;
    margin: 7px 0;
    padding: 10px;        
    border-radius: 5px;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.info};
`

export const ContainerButton =  styled.div``

export const link =  styled.a`
    width: 100px;
    margin: 7px 0;
    padding: 10px;        
    border-radius: 5px;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.info};
`