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
import HomeIcon from 'assets/icons/HomeIcon';
import NotifyIcon from 'assets/icons/NotifyIcon';
import MessageIcon from 'assets/icons/MessageIcon';
import CloudIcon from 'assets/icons/CloudIcon';
import PersonIcon from 'assets/icons/PersonIcon';
import SettingsIcons from 'assets/icons/SettingsIcons';
import LogoutIcon from 'assets/icons/LogoutIcon';
import FireIcon from 'assets/icons/FireIcon';

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
    Send: SendIcon,
    Notify: NotifyIcon,
    Message: MessageIcon,
    Cloud: CloudIcon,
    Person: PersonIcon,
    Settings: SettingsIcons,
    Logout: LogoutIcon,
    Fire: FireIcon,
    Home: HomeIcon
};

export default IconRegistry;
