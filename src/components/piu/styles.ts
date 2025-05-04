import styled from 'styled-components';

interface StyledPiuImageProps {
    hasBorder?: boolean;
}

export const StyledPiu = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
    width: 100%;
`;

export const StyledPiuHead = styled.div`
    width: 100%;
    display: flex;
`;

export const StyledPiuImage = styled.img<StyledPiuImageProps>`
    display: flex;
    padding: 8px;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 48px;
    margin-right: 10px;
    border: ${(props) =>
        props.hasBorder
            ? '4px solid var(--Institutional-Blue-Fade, #004c97)'
            : 'none'};
`;

export const StyledPiuTitle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
`;

export const StyledPiuTitleText = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const StyledPiuSubtitle = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

export const StyledPiuDescription = styled.p`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const StyledPiuFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`;

export const StyledPiuFooterText = styled.p`
    color: #ecedee;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 8px;
`;
