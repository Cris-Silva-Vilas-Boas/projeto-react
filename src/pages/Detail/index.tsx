import { useParams } from 'react-router-dom';
import { IDragonsProps , Dragons} from '../../services/api';
import formatDate from '../../utils/formatDate';
import Li from '../../components/List';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { Link } from 'react-router-dom';
import React, {
    useEffect,
    useState} from 'react';

import { 
    Container,
    Title, 
    BoxDragon } from './style'

const Detail: React.FC = () =>{
    const [dragon, setDragon] = useState<IDragonsProps>({} as IDragonsProps);
    const { id } = useParams<{id: string}>();
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(()=>{
        async function loadDragons(){
             await Dragons.getIdDragon(`${id}`)
            .then((data) => {
                setDragon(data);
                setLoading(false);
                
            }).catch((err) => {
                console.log(err);
                setLoading(false);
                setErro(true)
            });
        }
        loadDragons();
    }, [id]);

    if(loading){
        return(
            <Loader/>
        )
    }

    if(erro){
        return(
            <Error title="Id não encontrado"/>
        )
    }

    return( 
        <Container>
            <BoxDragon>
            <Title>{dragon.name}</Title>
                <Li>{dragon.id}</Li>
                <Li>{dragon.type}</Li>
                <Li>{formatDate(dragon.createdAt)}</Li>
                <Link to={"/"}>Voltar</Link>
            </BoxDragon>
        </Container>
    );
}

export default Detail;