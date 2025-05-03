import PiuNTec from 'components/piu';
import { TextInput } from 'components/TextInput';
import Icon from 'components/Icon';
import * as S from './styles';

const MainNTec: React.FC = () => {
    return (
        <S.StyledMain>
            <TextInput placeholder="Ouvir um piu..." icon="Search" />
            <TextInput
                placeholder="Quero dar um piu..."
                icon="None"
                maxLength={140}
                row={5}
                footer={
                    <S.Icons>
                        <S.Icons1>
                            <Icon name="Image" color="#fff" />
                            <Icon name="Video" color="#fff" />
                            <Icon name="Smile" color="#fff" />
                            <Icon name="Tag" color="#fff" />
                            <Icon name="Gif" color="#fff" />
                        </S.Icons1>
                        <S.Icons1>
                            <Icon name="Send" color="#fff" />
                        </S.Icons1>
                    </S.Icons>
                }
            />
            <hr />
            <PiuNTec
                name="Victor Oliveira"
                id="VictorOliveira"
                img="/assets/images/logo.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa eget nunc varius ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies."
                comments={5}
                likes={8}
                repiu={5}
            />
            <PiuNTec
                name="Victor Oliveira"
                id="VictorOliveira"
                img="/assets/images/logo.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa eget nunc varius ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies."
                comments={5}
                likes={8}
                repiu={5}
            />
            <PiuNTec
                name="Victor Oliveira"
                id="VictorOliveira"
                img="/assets/images/logo.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa eget nunc varius ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies. Sed eget neque ut massa tincidunt ultricies."
                comments={5}
                likes={8}
                repiu={5}
            />
        </S.StyledMain>
    );
};

export default MainNTec;
