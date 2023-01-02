import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container, 
    Tag,
    Button,
    ContainerButton 
}  from './style';

interface IDragonCard {
    name: string;
    onClickDelete: () => void;
    rotaDetails: string;
    rotaEdit: string;
    tagColor: string;
}

const HistoryFinanceCard: React.FC<IDragonCard> = ({
    name,
    onClickDelete,
    rotaDetails,
    rotaEdit,
    tagColor,
}) => (
    <Container data-testid="dragonCard">
        <Tag color={tagColor} />
        <div>
            <span>{name}</span>
            <Link to={rotaDetails}>Detalhes</Link>
        </div> 
        <ContainerButton>
            <Button onClick={onClickDelete} >Remover</Button>
            <Link  to={rotaEdit}><Button>Editar</Button></Link>
        </ContainerButton>   
    </Container>
);


export default HistoryFinanceCard;