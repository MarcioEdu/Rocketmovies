import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    background: ${({ theme }) => theme.COLORS.PINK_900};
    border-radius: 16px;
    padding: 24px;

    margin-bottom: 24px;


    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
}

    > .Tags {
        width: 100%;
        margin-top: 15px;
        margin-bottom: 8px;
        
    }
`;