import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    border: none;
    font-size: 16px;

    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    margin-bottom: 32px;
    
    > svg {
        width: 18px;
        height: 18px;

        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 8px;
        align-items: center;
    }


`;