import Icon from 'components/Icon';
import TrendsPiuNTec from 'components/trendsPiu';
import * as S from './styles';

const AsideNTec: React.FC = () => {
    return (
        <S.StyledAside>
            <S.StyledTitle>
                <Icon name="Fire" />
                Pius em alta
            </S.StyledTitle>
            <hr />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
            <TrendsPiuNTec />
        </S.StyledAside>
    );
};

export default AsideNTec;
