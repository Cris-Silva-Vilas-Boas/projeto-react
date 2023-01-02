import React from 'react';
import Button from '../Button';

import { 
    Container,
    Modal,
    Header,
    Message } from './style'

interface IModalProps{
    isModalVisible: boolean;
    header: string;
    message: string;
    close: () => void;
};


const Content: React.FC <IModalProps> = ({
    isModalVisible,
    header,
    message,
    close
}) =>{
    return( 
        <Container>
           <Modal data-testid="Modal">
               <Header>{header}</Header>
               <Message>{message}</Message>
               <Button onClick={close} type="submit">Fechar</Button>
           </Modal>
        </Container>
    );
}

export default Content;