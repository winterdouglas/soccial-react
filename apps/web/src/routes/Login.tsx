import styled from "styled-components";

import { subtitleText } from "@/assets/styles";
import { LoginForm } from "@/features/auth/components/LoginForm";

const Container = styled.section`
  display: grid;
  padding-block: ${({ theme }) => theme.spacingMedium};
  width: min(100% - ${({ theme }) => theme.spacingLarge} * 2, 70rem);
  gap: ${({ theme }) => theme.spacingMedium};

  /* HACK: Centers the form against the viewport, since the parent is not with position relative */
  position: absolute;
  inset: 0;
  margin: auto;
  place-content: center;
`;

const Title = styled.h2`
  ${subtitleText}
`;

export const Login = () => {
  return (
    <Container>
      <Title>You must login to continue</Title>
      <LoginForm />
    </Container>
  );
};
