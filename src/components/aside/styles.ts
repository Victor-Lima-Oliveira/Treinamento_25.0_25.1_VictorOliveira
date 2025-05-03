import styled from 'styled-components';

export const StyledAside = styled.aside`
    border-left: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    width: 20%;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
        overflow-y: auto;
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
`;

export const StyledAsideLink = styled.a``;

export const StyledTitle = styled.h2`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
