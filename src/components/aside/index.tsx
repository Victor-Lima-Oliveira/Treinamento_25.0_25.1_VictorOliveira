import * as S from './styles';

const AsideNTec : React.FC = () =>{
    return (   
        <S.StyledAside>
            <S.StyledAsideItem>
                <S.StyledAsideLink href="#">Home</S.StyledAsideLink>
            </S.StyledAsideItem>
            <S.StyledAsideItem>
                <S.StyledAsideLink href="#">About</S.StyledAsideLink>
            </S.StyledAsideItem>
            <S.StyledAsideItem>
                <S.StyledAsideLink href="#">Contact</S.StyledAsideLink>
            </S.StyledAsideItem>
        </S.StyledAside>
    );
}

export default AsideNTec;