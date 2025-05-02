import * as S from './styles';

const NavbarNTec : React.FC = () =>{
    return (   
        <S.StyledNavbar>
            <S.StyledLogo>
                <S.StyledImg src="/assets/images/logo.png" alt="logo" />
            </S.StyledLogo>
            <S.StyledNav>
                <S.StyledLink href="#">Home</S.StyledLink>
                <S.StyledLink href="#">About</S.StyledLink>
                <S.StyledLink href="#">Contact</S.StyledLink>
            </S.StyledNav>
        </S.StyledNavbar>
    );
}

export default NavbarNTec;