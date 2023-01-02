import React from 'react';
import { Container,TitlePage } from './style';
import { Link } from 'react-router-dom';

interface IErrorProps{
    title: string
}

const Error: React.FC <IErrorProps> = ({
    title
}) =>{
    return( 
        <Container>
            <TitlePage>{title}</TitlePage>
            <Link to='/'>Voltar</Link>
        </Container>
    );
}

export default Error;