import { Container, Profile, Logotype } from "./styles";
import { Input } from '../Input';

export function Header() {
    
    return (
        <Container>

            <Logotype>

                <div>
                    <h1>Rocketmovies</h1>
                </div>

            </Logotype>

            <Input placeholder="Pesquisar pelo título"/>
            
            <Profile to="/profile">

                <div>
                    <strong>Marcio Eduardo</strong>
                    <button>Sair</button>
                </div>
                
                <img 
                src="https://github.com/MarcioEdu.png"
                alt="Foto do Usúario" 
                />
                
            </Profile>
        </Container>
    );
}