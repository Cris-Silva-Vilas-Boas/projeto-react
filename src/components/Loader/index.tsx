import React from 'react';
import { Loader, Container } from './style';

const Content: React.FC = () =>{
    return( 
        <Container>
            <Loader data-testid="loader" />
        </Container>
    );
}

export default Content;