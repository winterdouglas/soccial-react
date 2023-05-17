import styled from "styled-components";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const StyledLink = styled(RouterLink)`
  border-width: 0;
  background: transparent;
  color: ${({ theme }) => theme.primary};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export type LinkProps = RouterLinkProps &
  React.RefAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...props }: LinkProps) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};
