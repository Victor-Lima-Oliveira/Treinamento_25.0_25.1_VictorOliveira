import Icon from 'components/Icon';
import { usuarioLogado as U } from 'components/container/main';
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
    liked: boolean;
    repiued: boolean;
    onDelete: () => void;
    onLike: () => void;
    onRepiu: () => void;
}

const PiuNTec: React.FC<PiuProps> = ({
    idUser,
    name,
    img,
    description,
    comments,
    likes,
    repiu,
    liked,
    repiued,
    onDelete,
    onLike,
    onRepiu
}) => {
    return (
        <S.StyledPiu>
            <S.StyledPiuHead>
                <S.StyledPiuImage hasBorder src={img} alt="piu" />
                <S.StyledPiuTitle>
                    <S.StyledPiuTitleText>{name}</S.StyledPiuTitleText>
                    <S.StyledPiuTitleText>@{idUser}</S.StyledPiuTitleText>
                </S.StyledPiuTitle>
                {idUser === U.id && (
                    <Icon name="Trash" color="red" onClick={onDelete} />
                )}
            </S.StyledPiuHead>
            <S.StyledPiuDescription>{description}</S.StyledPiuDescription>
            <S.StyledPiuFooter>
                <S.StyledPiuFooterText onClick={onRepiu}>
                    <Icon
                        name="Reload"
                        color={repiued ? '#3E63DD' : 'currentColor'}
                    />
                    {repiu}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="ChatCircle" />
                    {comments}
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText onClick={onLike}>
                    <Icon
                        name="Like"
                        fill={liked ? 'currentColor' : 'none'}
                        color={liked ? 'red' : 'currentColor'}
                    />
                    {likes}
                </S.StyledPiuFooterText>
            </S.StyledPiuFooter>
        </S.StyledPiu>
    );
};

export default PiuNTec;
