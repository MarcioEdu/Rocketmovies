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

   }
`;

export const Form = styled.form`
    max-width: 1137px;
    margin: 40px auto;
    > header {
        display: flex;
        flex-direction: column;

        margin-bottom: 40px;
    }

    > div {
        display: flex;
        gap: 40px;
    }

    > section {
        display: flex;
        flex-direction: column;
        gap: 24px;
        h2 {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
        
        > div {
            display: flex;
            gap: 24px;
            border-radius: 8px;

            background:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    margin-top: 24px;

    
    > .DeleteButton {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;

    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }

}
`;