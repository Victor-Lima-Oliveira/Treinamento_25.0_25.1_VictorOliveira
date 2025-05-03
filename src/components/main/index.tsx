import PiuNTec, { PiuProps } from 'components/piu';
import { TextInput } from 'components/TextInput';
import Icon from 'components/Icon';
import { useState } from 'react';

import * as S from './styles';

export const PiusBase: PiuProps[] = [
    {
        name: 'Nome de usuario',
        id: 'user',
        img: '/assets/images/user.png',
        description:
            'Only love can hurt like this... only love can hurt like this',
        comments: 1,
        likes: 2,
        repiu: 1
    },
    {
        name: 'Pedro Souza',
        id: 'pebaiano',
        img: '/assets/images/pebaiano.png',
        description:
            'NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos',
        comments: 3,
        likes: 8,
        repiu: 5
    },
    {
        name: 'Henri Sanson',
        id: 'OCarasco',
        img: '/assets/images/ocarasco.png',
        description:
            'Hoje o sol não nasceu em Versalhes — caiu em Paris às 10h22. Brilhou pela última vez na Place de la Révolution. E fui eu quem apagou a luz. #AuRevoirRoi #CorteReal',
        comments: 5,
        likes: 8,
        repiu: 5
    },
    {
        name: 'Martinho Lutero',
        id: 'NovoTestamento',
        description:
            '95 razões pra você não me subestimar — preguei na porta, mas foi na alma que doeu. Indulgência não compra perdão, e agora é pessoal. #EscorpiãoReforma #FogoEfé',
        img: '/assets/images/novotestamento.png',
        comments: 5,
        likes: 8,
        repiu: 5
    },
    {
        name: 'Galileu Galilei',
        id: 'Sol',
        description:
            'E pur si muove — mas fiquem à vontade pra continuar achando que o universo gira em torno de vocês. #SpoilerDoSéculoXVII',
        img: '/assets/images/sol.png',
        comments: 5,
        likes: 8,
        repiu: 5
    },
    {
        name: 'Napoleão Bonaparte',
        id: 'OConquistador',
        description:
            'Bati à porta de Portugal e o rei correu pro outro lado do oceano. Dizem que trouxe a corte. Eu digo que trouxe o medo. #CoragemFica #DomJoãoVoa',
        img: '/assets/images/oconquistador.png',
        comments: 5,
        likes: 8,
        repiu: 5
    }
];

const MainNTec: React.FC = () => {
    const [Pius, setPius] = useState<PiuProps[]>(PiusBase);
    const [newPiuText, setNewPiuText] = useState('');

    return (
        <S.StyledMain>
            <TextInput placeholder="Ouvir um piu..." icon="Search" />
            <TextInput
                placeholder="Quero dar um piu..."
                icon="None"
                maxLength={140}
                value={newPiuText}
                onChange={(e) => setNewPiuText(e.target.value)}
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
                            <Icon
                                name="Send"
                                color="#fff"
                                onClick={() => {
                                    if (!newPiuText.trim()) return;

                                    setPius((prev) => [
                                        {
                                            name: 'User',
                                            id: 'user',
                                            img: '/assets/images/logo.png',
                                            description: newPiuText,
                                            comments: 0,
                                            likes: 0,
                                            repiu: 0
                                        },
                                        ...prev // Coloca o novo piu no começo da lista
                                    ]);

                                    setNewPiuText(''); // limpa o input após enviar
                                }}
                            />
                        </S.Icons1>
                    </S.Icons>
                }
            />
            <hr />
            {Pius.map((piu) => (
                <PiuNTec
                    key={piu.id}
                    name={piu.name}
                    id={piu.id}
                    img={piu.img}
                    description={piu.description}
                    comments={piu.comments}
                    likes={piu.likes}
                    repiu={piu.repiu}
                />
            ))}
        </S.StyledMain>
    );
};

export default MainNTec;
