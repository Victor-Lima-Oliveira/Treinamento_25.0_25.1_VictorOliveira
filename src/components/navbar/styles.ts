import styled from 'styled-components';

export const StyledNavbar = styled.div`
    width: 20%;
    height: 100vh;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const StyledLogo = styled.div`
    width: 100%;
    padding: 16px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledImg = styled.img`
    border-radius: 50%;
    width: 64px;
    height: 64px;
`;

export const StyledImgLogo = styled.img`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 5vh;
`;

export const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    flex: 1;
`;

export const StyledLink = styled.a`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding: 8px 0px;
`;

export const StyledFooter = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 46px;
    gap: 16px;
`;
