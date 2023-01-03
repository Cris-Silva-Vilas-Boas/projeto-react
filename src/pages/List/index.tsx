import { IDragonsProps , Dragons} from '../../services/api';
import DragonCard from '../../components/Card';
import ContentHeader from '../../components/Content-header';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import Error from '../../components/Error';

import React,{
    useEffect,
    useState} from 'react';

import { 
    Container, 
    Content } from './style'

const List: React.FC  = () =>{
    const [dragons, setDragons] = useState<IDragonsProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(()=>{ async function loadDragons(){
        await Dragons.getAllDragons()
            .then((data) => {
                setDragons(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setErro(true);
            });
        }
        loadDragons();
    }, []);
    
    if(loading){
        return(
            <Loader/>
        )
    }

    if(erro){
        return(
            <Error title="Erro interno"/>
        )
    }

    dragons.sort((a, b) =>
        a.name > b.name ? 1 : -1,
    );

    const togglePostModal = () =>{
        setModal(!modal);
        window.location.reload(); 
    }

    return( 
        <Container>
            <ContentHeader title="Listar" lineColor="#E44C4E"> </ContentHeader>
             <Content>
                {
                 dragons.map((dragon) => {
                    const onClickDelete = () => {
                        Dragons.deleteDragon(dragon.id)
                        .then((data) => {
                            console.log(data);
                            setModal(true);
                        })
                        .catch((err) => {
                            console.log(err);
                            setErro(true);
                        });
                    } 

                    return (
                        <DragonCard 
                            key={dragon.id}
                            name={dragon.name}
                            onClickDelete={onClickDelete}
                            rotaDetails={`/dragon/${dragon.id}`}
                            rotaEdit={`/edit/dragon/${dragon.id}`}
                            tagColor="#F7931B"
                        /> 
                    )
                })}
            </Content>  
            {modal && (<Modal header='Excluído' message="Excluído com sucesso" isModalVisible={modal} close={togglePostModal}/>)}
        </Container>
    );
}

export default List;