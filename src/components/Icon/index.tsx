import React from 'react';
import { IconName } from 'utils/Icon/IconName';
import IconRegistry from 'utils/Icon/IconRegistery';

type IconProps = {
    name: IconName; // Agora usamos o tipo IconName diretamente
    color?: string;
    style?: React.CSSProperties;
    disableRiple?: boolean;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({
    name,
    color = '#fff',
    style = {},
    disableRiple = false,
    ...props
}) => {
    const Svg = IconRegistry[name];

    const cursorStyle: React.CSSProperties = {
        cursor: disableRiple ? 'default' : 'pointer'
    };

    return <Svg {...props} style={{ color, ...cursorStyle, ...style }} />;
};

export default Icon;
