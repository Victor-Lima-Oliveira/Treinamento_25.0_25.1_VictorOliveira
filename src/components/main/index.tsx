import * as S from './styles';
import PiuNTec from 'components/piu';
import { TextInput } from 'components/TextInput';
import Icon, { IconName } from 'utils/icons';

const MainNTec: React.FC = () => {
    return (
        <S.StyledMain>
            <TextInput placeholder="Ouvir um piu..." Icon={IconName.Search} />
            <TextInput
                placeholder="Quero dar um piu..."
                Icon={IconName.None}
                MaxLength={140}
                Row={5}
                footer={
                    <S.Icons>
                        <S.Icons1>
                            <Icon name={IconName.Image} color="#fff" />
                            <Icon name={IconName.Video} color="#fff" />
                            <Icon name={IconName.Smile} color="#fff" />
                            <Icon name={IconName.Tag} color="#fff" />
                            <Icon name={IconName.Gif} color="#fff" />
                        </S.Icons1>
                        <S.Icons1>
                            <Icon name={IconName.Send} color="#fff" />
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
