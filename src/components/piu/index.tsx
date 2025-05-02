import Icon from 'utils/icons';
import * as S from './styles';

const PiuNTec: React.FC = () => {
    return (
        <S.StyledPiu>
            <S.StyledPiuHead>
                <S.StyledPiuImage src="/assets/images/logo.png" alt="piu" />
                <S.StyledPiuTitle>
                    <S.StyledPiuTitleText>Pedro Souza</S.StyledPiuTitleText>
                    <S.StyledPiuTitleText>@pebaiano</S.StyledPiuTitleText>
                </S.StyledPiuTitle>
            </S.StyledPiuHead>
            <S.StyledPiuDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget massa eget nunc varius ultricies. Sed eget neque ut massa
                tincidunt ultricies. Sed eget neque ut massa tincidunt
                ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget
                neque ut massa tincidunt ultricies. Sed eget neque ut massa
                tincidunt ultricies. Sed eget neque ut massa tincidunt
                ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget
                neque ut massa tincidunt ultricies. Sed eget neque ut massa
                tincidunt ultricies.
            </S.StyledPiuDescription>
            <S.StyledPiuFooter>
                <S.StyledPiuFooterText>
                    <Icon name="Reload" />5
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="ChatCircle" />5
                </S.StyledPiuFooterText>
                <S.StyledPiuFooterText>
                    <Icon name="Like" color="#ff0000" />8
                </S.StyledPiuFooterText>
            </S.StyledPiuFooter>
        </S.StyledPiu>
    );
};

export default PiuNTec;
