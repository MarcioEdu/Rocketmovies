import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 116px;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;
    align-items: center;

    padding: 0 123px;

`;

export const Logotype = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

   > div {
        width: 100%;
        display: flex;
        align-items: center;

        h1 {
            color: ${({ theme }) => theme.COLORS.PINK};
        }

    }
`;

export const Profile = styled(Link)`
    width: 100%;
    display: flex;
    gap: 9px;
    align-items: center;
    
    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        line-height: 24px;

        strong {
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: right;
        }

        button {
            border: 0;
            font-size: 14px;
            text-align: right;
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
`;
