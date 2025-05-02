import React from 'react';
import ReloadIcon from './icons/ReloadIcon';
import ChatCircle from './icons/ChatCircleIcon';
import LikeIcon from './icons/LikeIcon';
import SearchIcon from './icons/SearchIcon';
import ImageIcon from './icons/ImageIcon';
import VideoIcon from './icons/VideoIcon';
import SmileIcon from './icons/SmileIcon';
import TagIcon from './icons/TagIcon';
import GifIcon from './icons/GifIcon';
import SendIcon from './icons/SendIcon';

// IconNames.ts
export enum IconName {
    None = '',
    Reload = 'Reload',
    ChatCircle = 'ChatCircle',
    Like = 'Like',
    Search = 'Search',
    Image = 'Image',
    Video = 'Video',
    Smile = 'Smile',
    Tag = 'Tag',
    Gif = 'Gif',
    Send = 'Send'
}

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    [IconName.None]: () => null,
    [IconName.Reload]: ReloadIcon,
    [IconName.ChatCircle]: ChatCircle,
    [IconName.Like]: LikeIcon,
    [IconName.Search]: SearchIcon,
    [IconName.Image]: ImageIcon,
    [IconName.Video]: VideoIcon,
    [IconName.Smile]: SmileIcon,
    [IconName.Tag]: TagIcon,
    [IconName.Gif]: GifIcon,
    [IconName.Send]: SendIcon
};

type IconProps = {
    name: IconName;
    color?: string;
    style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({
    name,
    color = '#fff',
    style = {},
    ...props
}) => {
    const Svg = icons[name];
    return <Svg {...props} style={{ color, ...style }} />;
};

export default Icon;
