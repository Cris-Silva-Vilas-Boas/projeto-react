import React,{useState} from 'react';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toggle';

import { 
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter
} from './styles';

import {
    MdListAlt,
    MdLibraryAdd,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

const Aside: React.FC = () =>{
    const {signOut} = useAuth();
    const { toggleTheme, theme} = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const [toggleMenuIsOpened, setToggleMenuisOpened] = useState(false);


    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    
    const handleToggleMenu = () => {
        setToggleMenuisOpened(!toggleMenuIsOpened);
    }

    return( 
        <Container menuIsOpen={toggleMenuIsOpened}>
            <ToggleMenu onClick={handleToggleMenu}>
                {toggleMenuIsOpened ? <MdClose /> : <MdMenu/>}
            </ToggleMenu>


            <Header>
                <LogImg src={logoImg} alt="Meu logo"/>
                <Title>Projeto React</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdListAlt/>
                    Listar
                </MenuItemLink>

                <MenuItemLink href="/register">
                    <MdLibraryAdd/>
                    Cadastrar
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                   <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;