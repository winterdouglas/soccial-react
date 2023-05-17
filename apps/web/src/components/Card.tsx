import { Children, ComponentType, HTMLAttributes } from "react";
import styled from "styled-components";

import { contenTitleText } from "@/assets/styles";
import { PropsWithChildren } from "react";

const Container = styled.section`
  display: grid;
  padding: ${({ theme }) => theme.spacingMedium};
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 0 16px rgb(0 0 0 / 10%);
  gap: ${({ theme }) => theme.spacingExtraSmall};
`;

const Title = styled.h3`
  ${contenTitleText}
`;

const DefaultContainer = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export type CardProps = HTMLAttributes<HTMLElement> & {
  title?: string;

  ContainerComponent?: ComponentType<HTMLAttributes<HTMLElement>>;
};

export const Card = ({
  title,
  children,
  ContainerComponent = DefaultContainer,
  ...props
}: CardProps) => {
  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}
      {Children.count(children) > 0 && (
        <ContainerComponent>{children}</ContainerComponent>
      )}
    </Container>
  );
};
