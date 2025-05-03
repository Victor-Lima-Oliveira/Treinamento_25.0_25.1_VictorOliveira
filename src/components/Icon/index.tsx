import React from 'react';
import { IconName } from 'utils/Icon/IconName';
import IconRegistry from 'utils/Icon/IconRegistery';

type IconProps = {
    name: IconName; // Agora usamos o tipo IconName diretamente
    color?: string;
    style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({
    name,
    color = '#fff',
    style = {},
    ...props
}) => {
    const Svg = IconRegistry[name];
    return <Svg {...props} style={{ color, ...style }} />;
};

export default Icon;
