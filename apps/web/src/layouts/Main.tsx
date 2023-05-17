import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { titleText } from "@/assets/styles";
import { AuthStatus } from "@/features/auth";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacingLarge};
`;

const Title = styled.h1`
  ${titleText};
`;

export const Main = () => {
  return (
    <>
      <Header>
        <Title>Soccial</Title>
        <AuthStatus />
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
