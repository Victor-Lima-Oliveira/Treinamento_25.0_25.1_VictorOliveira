import styled from 'styled-components';

export const StyledInput = styled.div`
    padding: 8px;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
    width: 100%;
`;

export const StyledInputHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    transition: all 0.3s ease-in-out;

    &::placeholder {
        color: #fff;
        opacity: 0.5;
    }

    &:focus {
        border: 1px solid #fff;
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
`;

export const StyledTextInput = styled.textarea`
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    width: 100%;
    padding: 8px;
    resize: none;
`;

export const StyledIconInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    font-size: 20px;
    cursor: pointer;
`;

export const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    width: 100%;
`;
