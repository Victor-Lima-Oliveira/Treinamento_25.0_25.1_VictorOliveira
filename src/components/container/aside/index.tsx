import Icon from 'components/Icon';
import TrendsPiuNTec from 'components/container/aside/trendsPiu';
import * as S from './styles';

export const trendsPiulist = [
    {
        id: 1,
        img: '/assets/images/Trends1.png',
        title: 'Eleições 2022',
        description:
            'Eleição em São Paulo: veja Pius sobre a disputa  de segundo turno entre Neymar e Vini Jr'
    },
    {
        id: 2,
        img: '/assets/images/Trends2.png',
        title: '#AppleTeacher',
        description:
            'Na semana do Dia do professor, agradecemos sua paixão e decicação'
    },
    {
        id: 3,
        img: '/assets/images/Trends3.png',
        title: 'A fazenda',
        description: 'A fazenda 14: Veja os Pius sobre o programa'
    },
    {
        id: 4,
        img: '/assets/images/Trends4.png',
        title: 'Vôlei',
        description:
            'Sérvia derrota o Brasil e é campeã mundial de vôlei feminino'
    },
    {
        id: 5,
        img: '/assets/images/Trends5.png',
        title: 'Clima tenso no NTEC',
        description: 'Gomes é chamado de campos e se irrita com companheiros'
    },
    {
        id: 6,
        img: '/assets/images/Trends6.png',
        title: 'Título',
        description: 'Nossa q piu foda slk mt conteúdo qualidade pika ta maluco'
    },
    {
        id: 7,
        img: '/assets/images/Trends7.png',
        title: 'Título',
        description: 'Nossa q piu foda slk mt conteúdo qualidade pika ta maluco'
    }
];

const AsideNTec: React.FC = () => {
    return (
        <S.StyledAside>
            <S.StyledTitle>
                <Icon name="Fire" />
                Pius em alta
            </S.StyledTitle>
            <hr />
            {trendsPiulist.map((trendsPiu) => (
                <TrendsPiuNTec
                    key={trendsPiu.title}
                    img={trendsPiu.img}
                    title={trendsPiu.title}
                    description={trendsPiu.description}
                />
            ))}
        </S.StyledAside>
    );
};

export default AsideNTec;
