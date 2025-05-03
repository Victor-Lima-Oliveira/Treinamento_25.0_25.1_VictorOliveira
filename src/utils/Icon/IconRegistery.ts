import ReloadIcon from 'assets/icons/ReloadIcon';
import ChatCircleIcon from 'assets/icons/ChatCircleIcon';
import LikeIcon from 'assets/icons/LikeIcon';
import SearchIcon from 'assets/icons/SearchIcon';
import ImageIcon from 'assets/icons/ImageIcon';
import VideoIcon from 'assets/icons/VideoIcon';
import SmileIcon from 'assets/icons/SmileIcon';
import TagIcon from 'assets/icons/TagIcon';
import GifIcon from 'assets/icons/GifIcon';
import SendIcon from 'assets/icons/SendIcon';
import { IconName } from '../Icon/IconName';

// Mapeando os nomes dos ícones para seus respectivos componentes
const IconRegistry: Record<
    IconName,
    React.FC<React.SVGProps<SVGSVGElement>>
> = {
    None: () => null,
    Reload: ReloadIcon,
    ChatCircle: ChatCircleIcon,
    Like: LikeIcon,
    Search: SearchIcon,
    Image: ImageIcon,
    Video: VideoIcon,
    Smile: SmileIcon,
    Tag: TagIcon,
    Gif: GifIcon,
    Send: SendIcon
};

export default IconRegistry;
