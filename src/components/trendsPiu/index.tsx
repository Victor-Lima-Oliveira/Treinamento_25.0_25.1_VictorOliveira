import * as S from './styles';

export const TrendsPiuNTec: React.FC = () => {
    return (
        <>
            <S.StyledAsideItem>
                <S.StyledImg src="/assets/images/logo.png" alt="logo" />
                <S.StyledAsideItemRight>
                    <S.StyledTitleItem>Eleições 2022</S.StyledTitleItem>
                    <S.StyledDescriptionItem>
                        Eleição em São Paulo: veja Pius sobre a disputa de
                        segundo turno entre Neymar e Vini Jr.
                    </S.StyledDescriptionItem>
                </S.StyledAsideItemRight>
            </S.StyledAsideItem>
            <hr />
        </>
    );
};

export default TrendsPiuNTec;
