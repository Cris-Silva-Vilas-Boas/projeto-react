import React, { ButtonHTMLAttributes} from 'react';
import { Container } from './style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FunctionComponent<IButtonProps>= ({children,...rest}) => {
    return( 
        <Container data-testid="button" {...rest} >
            {children}
        </Container>
    ); 
}

export default Button;