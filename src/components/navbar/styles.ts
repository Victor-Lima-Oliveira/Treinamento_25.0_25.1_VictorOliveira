import styled from 'styled-components';

export const StyledNavbar = styled.div`
    width: 20%;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
`;

export const StyledLogo = styled.div`
    width: 100%;
    padding: 16px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledImg = styled.img`
    width: 50%;
`;

export const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export const StyledLink = styled.a`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 16px;
    text-decoration: none;
`;
