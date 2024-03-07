import styled from 'styled-components';
import backgroundImg from '../../assets/Tela.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    flex-direction: column;
    justify-content: center;


    > h1 {
        font-size: 48px;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
 
`;

export const Background = styled.div`
    flex: 1;

    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;

export const Backhome = styled.footer`
    width: 100%;

    display: flex;
    justify-content: center;
    margin-top: 48px;

    > a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.PINK};

        svg {
            width: 18px;
            height: 18px;
            margin-right: 4px;  
        }
    }
`;