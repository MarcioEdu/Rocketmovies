import { Container, Content, Button, Brand} from './styles';
import { RiAddFill } from "react-icons/ri";

import { Header } from '../../components/Header';
import { Stars } from '../../components/Starts';
import { Tag } from '../../components/Tag';
import { Movienote } from '../../components/Movienote';


export function Home() {
    return (
        <Container>
            <Header />
            
                <Brand>
                    <div>

                    <h1> Meu filmes </h1>
                    <Button to="/newmovie">
                        <RiAddFill /> Adicionar Filmes
                    </Button>
                    </div>
                </Brand>
                <Content>
                    <Movienote />
                    <Movienote />
                    <Movienote />
                </Content>
        </Container>
    )
}