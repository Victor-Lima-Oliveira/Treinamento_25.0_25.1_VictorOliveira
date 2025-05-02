import Icon from 'utils/icons';
import * as S from './styles';

interface PiuProps {
    id: string;
    name: string;
    img: string;
    description: string;
    comments: number;
    likes: number;
    repiu: number;
}

const PiuNTec: React.FC<PiuProps> = (PiuProps) => {
    return (
        <S.StyledPiu>
            <S.StyledPiuHead>
                <S.StyledPiuImage src={PiuProps.img} alt="piu" />
                <S.StyledPiuTitle>
                    <S.StyledPiuTitleText>{PiuProps.name}</S.StyledPiuTitleText>
                    <S.StyledPiuTitleText>@{PiuProps.id}</S.StyledPiuTitleText>
                </S.StyledPiuTitle>
            </S.StyledPiuHead>
            <S.StyledPiuDescription>
                {PiuProps.description}
            </S.StyledPiuDescription>
            <S.StyledPiuFooter>
                <S.StyledPiuFooterText>
                    <Icon name="Reload" />
                    {PiuProps.repiu}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="ChatCircle" />
                    {PiuProps.comments}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="Like" color="#ff0000" />
                    {PiuProps.likes}
                </S.StyledPiuFooterText>
            </S.StyledPiuFooter>
        </S.StyledPiu>
    );
};

export default PiuNTec;
