import { IconType, Icons } from "@/assets/icons";
import { ButtonHTMLAttributes, SVGProps } from "react";
import styled, { keyframes, useTheme } from "styled-components";

const scaleAnimation = keyframes`
 0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  border-width: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  padding: 0;
  min-height: ${({ theme }) => theme.spacingMedium};
  aspect-ratio: 1;
  outline-color: transparent;

  &:hover,
  &:focus {
    animation: ${scaleAnimation} 1s ease-in-out;
  }

  &:active {
    opacity: 0.6;
  }
`;

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType;
  iconProps?: SVGProps<SVGSVGElement>;
};

export const IconButton = ({ icon, iconProps, ...props }: IconButtonProps) => {
  const { primary } = useTheme();
  const Icon = Icons[icon];

  return (
    <StyledButton {...props}>
      <Icon color={primary} {...iconProps} />
    </StyledButton>
  );
};
