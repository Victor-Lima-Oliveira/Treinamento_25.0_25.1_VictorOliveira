import styled from 'styled-components';

export const StyledAsideItem = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    height: 120px;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom: 8px;
    overflow-wrap: anywhere;
`;

export const StyledDescriptionItem = styled.p`
    color: var(--Slate-12, #ecedee);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    display: -webkit-box;
    -webkit-line-clamp: 4; /* 94px / 20px ≈ 4 linhas */
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 94px;
`;

export const StyledAsideItemRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
`;
