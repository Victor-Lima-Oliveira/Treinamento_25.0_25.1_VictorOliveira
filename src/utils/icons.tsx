import React from 'react';
import ReloadIcon from './icons/ReloadIcon';
import ChatCircle from './icons/ChatCircleIcon';
import LikeIcon from './icons/LikeIcon';

type IconName = 'Reload' | 'ChatCircle' | 'Like';

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Reload: ReloadIcon,
  ChatCircle: ChatCircle,
  Like: LikeIcon,
};

type IconProps = {
  name: IconName;
  color?: string;
  style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({ name, color = '#fff', style = {}, ...props }) => {
  const Svg = icons[name];
  return (
    <Svg
      {...props}
      style={{ color, ...style }} // Mescla o estilo para aplicar a cor corretamente
    />
  );
};

export default Icon;
