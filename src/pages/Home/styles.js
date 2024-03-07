import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

   display: grid;
   grid-template-rows: 116px auto;
   grid-template-areas: 
   'header'
   'brand'
   'content';

`;

export const Brand = styled.div`
    width: 100%;

    display: grid;
    grid-area: brand;
    padding: 32px 134px;

    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

`;

export const Content = styled.div`
    width: 100%;

    grid-area: content;
    overflow-y: scroll;
    padding: 0 134px;

`;

export const Button = styled(Link)`
    height: 48px;

    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 14px;
    border-radius: 8px;

    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }

    > svg {
        height: 24px;
        width: 24px;
        margin-right: 
    }
`;


