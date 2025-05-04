import Icon from 'components/Icon';
import { usuarioLogado as U } from 'components/main';
import * as S from './styles';

export interface PiuProps {
    id: number;
    idUser: string;
    name: string;
    img: string;
    description: string;
    comments: number;
    likes: number;
    repiu: number;
}

const PiuNTec: React.FC<PiuProps> = ({
    idUser,
    name,
    img,
    description,
    comments,
    likes,
    repiu
}) => {
    return (
        <S.StyledPiu>
            <S.StyledPiuHead>
                <S.StyledPiuImage
                    hasBorder={idUser === U.id}
                    src={img}
                    alt="piu"
                />
                <S.StyledPiuTitle>
                    <S.StyledPiuTitleText>{name}</S.StyledPiuTitleText>
                    <S.StyledPiuTitleText>@{idUser}</S.StyledPiuTitleText>
                </S.StyledPiuTitle>
                {idUser === U.id && <Icon name="Trash" color="red" />}
            </S.StyledPiuHead>
            <S.StyledPiuDescription>{description}</S.StyledPiuDescription>
            <S.StyledPiuFooter>
                <S.StyledPiuFooterText>
                    <Icon name="Reload" />
                    {repiu}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="ChatCircle" />
                    {comments}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="Like" />
                    {likes}
                </S.StyledPiuFooterText>
            </S.StyledPiuFooter>
        </S.StyledPiu>
    );
};

export default PiuNTec;
