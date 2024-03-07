import { Container } from "./styles";

import { RiArrowLeftLine } from "react-icons/ri";

export function ButtonText( {title, ...rest}) {
    return (
    <Container
            type="button"
            {...rest}
        >
            <RiArrowLeftLine /> {title}
    </Container>
    )
    
}