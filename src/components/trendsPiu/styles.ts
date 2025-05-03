import styled from 'styled-components';

export const StyledAsideItem = styled.div`
    display: flex;
`;

export const StyledImg = styled.img`
    width: 50%;
`;

export const StyledTitleItem = styled.h3`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    justify-content: center;
    align-items: center;
`;
