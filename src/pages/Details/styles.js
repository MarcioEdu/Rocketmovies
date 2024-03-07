import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

   display: grid;
   grid-template-rows: 116px auto;
   grid-template-areas: 
   'header'
   'content';

   > main {
        grid-area: content;
        overflow-y: scroll;

        padding: 40px 123px;

   }
`;

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

   > p {
        text-align: justify;
   }
`;

export const TitleMovie = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;

    margin-bottom: 24px;

`;

export const DateTime = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
        width: 16px;
        height: 16px;

        border-radius: 50%;
        border-bottom: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_500}; 
    }
    > p {
        display: flex;
        align-items: center;
        
        > svg {
            margin-right: 4px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Section = styled.div`
    display: flex;
    align-items: center;

    margin: 40px 0;

`;