import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-width: 0;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  padding: 0.5em 1.5em;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
