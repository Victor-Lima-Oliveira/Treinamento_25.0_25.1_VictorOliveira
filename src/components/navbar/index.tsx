import Icon from 'components/Icon';
import * as S from './styles';

const NavbarNTec: React.FC = () => {
    return (
        <S.StyledNavbar>
            <S.StyledLogo>
                <S.StyledImg src="/assets/images/logo.png" alt="logo" />
            </S.StyledLogo>
            <S.StyledNav>
                <S.StyledLink href="#">
                    <Icon name="Home" />
                    Página Inicial
                </S.StyledLink>
                <S.StyledLink href="#">
                    <Icon name="Notify" />
                    Notificações
                </S.StyledLink>
                <S.StyledLink href="#">
                    <Icon name="Message" />
                    Mensagens
                </S.StyledLink>
                <S.StyledLink href="#">
                    <Icon name="Cloud" />
                    Salvos
                </S.StyledLink>
                <S.StyledLink href="#">
                    <Icon name="Person" />
                    Perfil
                </S.StyledLink>
                <S.StyledLink href="#">
                    <Icon name="Settings" />
                    Configurações
                </S.StyledLink>
            </S.StyledNav>
            <S.StyledFooter>
                <S.StyledImg src="/assets/images/logo.png" alt="logo" />
                <Icon name="Logout" />
            </S.StyledFooter>
        </S.StyledNavbar>
    );
};

export default NavbarNTec;
