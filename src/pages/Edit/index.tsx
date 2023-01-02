import { IDragonsProps, Dragons } from '../../services/api';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Error from '../../components/Error';

import React, {
    useEffect,
    useState} from 'react';

import { Container,
         Form,
         FormTitle
} from './style';

const Edit: React.FC = () =>{
    const [erro, setErro] = useState(false);
    const [olDragons, oldSetDragons] = useState<IDragonsProps>({} as IDragonsProps);
    const { id } = useParams<{id: string}>();
    const [dragon, setDragon] = useState<IDragonsProps>({} as IDragonsProps);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        async function loadDragons(){
            await Dragons.getIdDragon(`${id}`)
            .then((data) => {
                oldSetDragons(data);
            })
            .catch((err) => {
                console.log(err);
                setErro(true);
            });
        }
        loadDragons();
    }, [id]);

    if(erro){
        return(
            <Error title="Id não encontrado"/>
        )
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        setDragon({
          ...dragon,
          [e.target.name]: e.target.value.trim(),
        });
    };
    
    const onSubmit =(e: React.FormEvent) =>{
        Dragons.alterDragon(`${id}`, dragon);
        e.preventDefault();
        setModal(true);
    }

    const togglePostModal = () =>{
        setModal(!modal);
        window.location.reload(); 
    }

    return( 
        <Container>
            <Form onSubmit={onSubmit}>
                <FormTitle>Editar</FormTitle>
                
                <Input 
                    required
                    type='text'
                    placeholder="Nome"
                    name="name"
                    defaultValue={olDragons.name}
                    onChange={handleChange}
                />

                <Input 
                    required
                    type='text'
                    placeholder="Tipo"
                    name="type"
                    defaultValue={olDragons.type}
                    onChange={handleChange}
                />

                <Input 
                    required
                    type='text'
                    placeholder="Data de criação"
                    name="createdAt"
                    defaultValue={olDragons.createdAt}
                    onChange={handleChange}
                />

                <Button type="submit">Salvar</Button>
            </Form>
            {modal && (<Modal header='Editado' message="Autalizado com sucesso" isModalVisible={modal} close={togglePostModal}/>)}

        </Container>
    );
}

export default Edit;