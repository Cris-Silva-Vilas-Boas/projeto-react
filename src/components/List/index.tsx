import React, { LiHTMLAttributes} from 'react';
import { Container } from './style';


type ILiProps = LiHTMLAttributes<HTMLLIElement>;


const Li: React.FC<ILiProps>= ({ ...rest}) => {
    return( 
        <Container data-testid="list" {...rest} />
    ); 
}

export default Li;