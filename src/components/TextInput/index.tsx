import Icon, { IconName } from 'utils/icons';
import * as S from './styles';

interface TextInputProps {
    placeholder?: string;
    Icon?: IconName;
    Row?: number;
    MaxLength?: number;
    footer?: React.ReactNode;
}

export const TextInput = (TextInputProps: TextInputProps) => {
    return (
        <S.StyledInput>
            <S.StyledInputHead>
                <S.StyledTextInput
                    placeholder={TextInputProps.placeholder}
                    maxLength={TextInputProps.MaxLength}
                    rows={TextInputProps.Row ?? 1}
                />
                {TextInputProps.Icon !== IconName.None && (
                    <S.StyledIconInput>
                        <Icon
                            name={TextInputProps.Icon ?? IconName.None}
                            color="#fff"
                        />
                    </S.StyledIconInput>
                )}
            </S.StyledInputHead>
            <S.StyledFooter> {TextInputProps.footer} </S.StyledFooter>
        </S.StyledInput>
    );
};
