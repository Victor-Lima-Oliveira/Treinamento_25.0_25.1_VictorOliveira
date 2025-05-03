import Icon from 'components/Icon';
import { IconName } from 'utils/Icon/IconName';
import * as S from './styles';

interface TextInputProps {
    placeholder?: string;
    icon?: IconName;
    row?: number;
    maxLength?: number;
    footer?: React.ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextInput = ({
    placeholder = '',
    icon = 'None',
    row = 1,
    maxLength,
    footer,
    value,
    onChange
}: TextInputProps) => {
    return (
        <S.StyledInput>
            <S.StyledInputHead>
                <S.StyledTextInput
                    placeholder={placeholder}
                    maxLength={maxLength}
                    rows={row}
                    value={value}
                    onChange={onChange}
                />
                {icon !== 'None' && (
                    <S.StyledIconInput>
                        <Icon name={icon} color="#fff" />
                    </S.StyledIconInput>
                )}
            </S.StyledInputHead>
            <S.StyledFooter> {footer} </S.StyledFooter>
        </S.StyledInput>
    );
};

TextInput.defaultProps = {
    placeholder: '',
    icon: 'None',
    row: 1,
    maxLength: undefined,
    footer: undefined,
    onChange: undefined,
    value: undefined
};
