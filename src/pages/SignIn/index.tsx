import React, {useState}from 'react';
import { 
    Container, 
    Logo , 
    FormTitle, 
    Form} from './style';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signIn } = useAuth();

    return( 
       <Container>
            <Logo>
                 <img src={logoImg} alt="Minha carteira" />
                 <h2>Projeto react</h2>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>
                <Input 
                    type ="email"
                    required
                    placeholder="Email"
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    required
                    type="password" 
                    placeholder="Senha"
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Acessar</Button>
            </Form>
       </Container>
    );
}

export default SignIn;