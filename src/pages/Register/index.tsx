import React,{useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Dragons} from '../../services/api';
import Modal  from '../../components/Modal';
import Error from '../../components/Error';

import {
    Container, 
    Form,
    FormTitle
    } from './style';

const Register: React.FC = () =>{
    const [modal, setModal] = useState(false);
    const [erro, setErro] = useState(false);

    const [dragon, setDragon] = useState({
        name: "",
        type: "",
        id:"",
        createdAt:""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        setDragon({
          ...dragon,
          [e.target.name]: e.target.value,
        });
      };
    
      
    const onSubmit =(e: React.FormEvent) =>{
        Dragons.createDragon(dragon).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
            setErro(true);
        });
        
        e.preventDefault();
        setModal(true);
        setDragon({
            name: '',
            type: '',
            id:'',
            createdAt:''
        })
    }

    const togglePostModal = () =>{
        setModal(!modal);
        window.location.reload(); 
    }

    if(erro){
        return(
            <Error title="Erro interno"/>
        )
    }

    return( 
        <Container>
            <Form onSubmit={onSubmit}>
                <FormTitle>Cadastrar</FormTitle>
                <Input 
                    required
                    type='text'
                    placeholder="Nome"
                    name="name"
                    value={dragon.name}
                    onChange={handleChange}
                />
                <Input 
                    required
                    type='text'
                    placeholder="Tipo"
                    name="type"
                    value={dragon.type}
                    onChange={handleChange}
                />
               <Input 
                    required
                    type='date'
                    placeholder="Data de criação"
                    name="createdAt"
                    value={dragon.createdAt}
                    onChange={handleChange}
                />
                <Button type="submit">Salvar</Button>
            </Form>
        {modal && (<Modal header='Registrado' message="Cadastrado com sucesso" isModalVisible={modal} close={togglePostModal}/>)}
   </Container>
    
    );
}

export default Register;