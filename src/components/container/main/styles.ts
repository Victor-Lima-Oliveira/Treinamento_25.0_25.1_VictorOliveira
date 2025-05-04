import styled from 'styled-components';

export const StyledMain = styled.main`
    width: 100%;
    height: 100vh;
    background: #151718;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }

    @media (max-width: 1024px) {
        padding: 16px;
    }
    @media (max-width: 728px) {
        padding: 8px;
        gap: 16px;
    }
`;

export const Icons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Icons1 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
