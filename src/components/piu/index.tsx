import Icon from 'components/Icon';
import * as S from './styles';

export interface PiuProps {
    id: string;
    name: string;
    img: string;
    description: string;
    comments: number;
    likes: number;
    repiu: number;
}

const PiuNTec: React.FC<PiuProps> = (Props) => {
    return (
        <S.StyledPiu>
            <S.StyledPiuHead>
                <S.StyledPiuImage src={Props.img} alt="piu" />
                <S.StyledPiuTitle>
                    <S.StyledPiuTitleText>{Props.name}</S.StyledPiuTitleText>
                    <S.StyledPiuTitleText>@{Props.id}</S.StyledPiuTitleText>
                </S.StyledPiuTitle>
            </S.StyledPiuHead>
            <S.StyledPiuDescription>{Props.description}</S.StyledPiuDescription>
            <S.StyledPiuFooter>
                <S.StyledPiuFooterText>
                    <Icon name="Reload" />
                    {Props.repiu}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="ChatCircle" />
                    {Props.comments}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="Like" />
                    {Props.likes}
                </S.StyledPiuFooterText>
            </S.StyledPiuFooter>
        </S.StyledPiu>
    );
};

export default PiuNTec;
