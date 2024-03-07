import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border:  ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    margin: 16px;
    border-radius: 10px;
    padding-right: 12px;

    > button {
        border: none;
        background: none;

        > svg {
            width: 24px;
            height: 24px;
            
            color: ${({ theme }) => theme.COLORS.PINK};
            margin-right: 8px;
            align-items: center;
        }
    }

    > input {
        width: 100%;
        height: 56px;

        padding: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }


    }
`;