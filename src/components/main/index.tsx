import * as S from './styles';

type ContainerProps = {
    children: React.ReactNode;
};

const MainNTec: React.FC<ContainerProps> = ({ children }) => {
    return <S.StyledMain>{children}</S.StyledMain>;
};

export default MainNTec;
