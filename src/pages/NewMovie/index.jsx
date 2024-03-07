import { Container, Form, Buttons } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input} from '../../components/Input';
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from '../../components/Button';

export function NewMovie() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <ButtonText to="/" title="Voltar"/>
                        <h1>Novo filme</h1>
                    </header>
                    
                    <div>
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações"/>

                    <section>
                        <h2>Marcadores</h2>

                        <div>
                            <NoteItem value="React"/>
                            <NoteItem placeholder="Novo marcador" isNew />
                        </div>
                    </section>
                    <Buttons>
                        <button className="DeleteButton"> Excluir nota </button>

                        <Button title="Salvar alterações"/>
                    </Buttons>
                </Form>
            </main>

        </Container>
    )
}