import { Container } from "./styles";
import { RiStarLine, RiStarFill } from "react-icons/ri";

export function Stars() {
    return(
        <Container>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarLine/>
        </Container>
    )
}