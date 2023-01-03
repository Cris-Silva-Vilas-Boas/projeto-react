import React from 'react';
import { Container } from './style';
import Error from '../../components/Error';

const NotFound: React.FC  = () =>{
    return( 
        <Container>
            <Error title='Página não encontrada' />
        </Container>
    );
}

export default NotFound;