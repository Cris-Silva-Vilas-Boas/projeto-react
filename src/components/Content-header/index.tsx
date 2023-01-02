import React from 'react';
import { 
    Container,
    Title,
    Controllers } from './style';

interface IContentHeaderProps{
    title: string;
    lineColor: string;
    children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) =>{

    return( 
        <Container data-testid="ContentHeader">
            <Title lineColor={lineColor}>
                <h1>{title}</h1>
            </Title>
            <Controllers>
                 {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;