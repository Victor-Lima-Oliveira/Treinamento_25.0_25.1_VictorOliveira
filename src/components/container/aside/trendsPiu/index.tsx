import * as S from './styles';

interface TrendsPiuProps {
    img: string;
    title: string;
    description: string;
}

export const TrendsPiuNTec: React.FC<TrendsPiuProps> = ({
    img,
    title,
    description
}) => {
    return (
        <>
            <S.StyledAsideItem>
                <S.StyledImg src={img} alt="logo" />
                <S.StyledAsideItemRight>
                    <S.StyledTitleItem>{title}</S.StyledTitleItem>
                    <S.StyledDescriptionItem>
                        {description}
                    </S.StyledDescriptionItem>
                </S.StyledAsideItemRight>
            </S.StyledAsideItem>
            <hr />
        </>
    );
};

export default TrendsPiuNTec;
