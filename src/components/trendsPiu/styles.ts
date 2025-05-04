import styled from 'styled-components';

export const StyledAsideItem = styled.div`
    display: flex;
    gap: 16px;
    height: 15vh;
`;

export const StyledImg = styled.img`
    display: flex;
    align-items: center;
    width: 50%;
    height: auto;
    object-fit: cover;
`;

export const StyledTitleItem = styled.h3`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom: 8px;
`;

export const StyledDescriptionItem = styled.p`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const StyledAsideItemRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
`;
