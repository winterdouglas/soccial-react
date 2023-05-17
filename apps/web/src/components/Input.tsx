import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-bottom: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.textDim};
  background-color: transparent;
  padding: ${({ theme }) => theme.spacingMicro};

  /** This gets rid of an annoying white border around the element when setting the outline-color to white :( */
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.textDim};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.primary};
  }
`;

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};
