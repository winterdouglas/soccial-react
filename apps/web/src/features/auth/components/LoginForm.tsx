import { FormEvent, useId } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "@/features/auth/contexts";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { visuallyHidden } from "@/assets/styles";

const Label = styled.label`
  ${visuallyHidden}
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: ${({ theme }) => theme.spacingSmall};
`;

export const LoginForm = () => {
  const usernameId = useId();
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    await signIn(username);

    navigate(from, { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={usernameId}>Username</Label>
      <Input
        placeholder="Enter your name"
        id={usernameId}
        name="username"
        type="text"
        required
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};
