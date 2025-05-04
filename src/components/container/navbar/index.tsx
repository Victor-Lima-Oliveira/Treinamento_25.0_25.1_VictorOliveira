import { useState } from 'react';
import Icon from 'components/Icon';
import { IconName } from 'utils/Icon/IconName';
import * as S from './styles';

interface StyledLinkProps {
    id: string;
    icon: IconName;
    label: string;
}

const listLinks: StyledLinkProps[] = [
    { id: 'paginaInicial', icon: 'Home', label: 'Página Inicial' },
    { id: 'notificacoes', icon: 'Notify', label: 'Notificações' },
    { id: 'mensagens', icon: 'Message', label: 'Mensagens' },
    { id: 'salvos', icon: 'Cloud', label: 'Salvos' },
    { id: 'perfil', icon: 'Person', label: 'Perfil' },
    { id: 'configuracoes', icon: 'Settings', label: 'Configurações' }
];

const NavbarNTec: React.FC = () => {
    const [activeLink, setActiveLink] = useState('paginaInicial');

    return (
        <S.StyledNavbar>
            <S.StyledLogo>
                <S.StyledImgLogo src="assets/images/logo.png" alt="logo" />
            </S.StyledLogo>
            <S.StyledNav>
                {listLinks.map((item) => (
                    <S.StyledLink
                        key={item.id}
                        href={`#${item.id}`}
                        isActive={activeLink === item.id}
                        onClick={() => setActiveLink(item.id)}
                    >
                        <Icon name={item.icon} />
                        {item.label}
                    </S.StyledLink>
                ))}
            </S.StyledNav>
            <S.StyledFooter>
                <S.StyledImg src="assets/images/voce.png" alt="logo" />
                <Icon name="Logout" width={64} height={64} />
            </S.StyledFooter>
        </S.StyledNavbar>
    );
};

export default NavbarNTec;
