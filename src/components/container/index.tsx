import * as S from './styles';

type ContainerProps = {
    children: React.ReactNode;
};

const ContainerNTec: React.FC<ContainerProps> = ({ children }) => {
    return <S.StyledContainer>{children}</S.StyledContainer>;
};

export default ContainerNTec;
