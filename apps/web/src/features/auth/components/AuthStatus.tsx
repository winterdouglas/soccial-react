import { useAuth } from "@/features/auth/contexts";
import { Link } from "@/components/Link";
import styled from "styled-components";

const Username = styled.b`
  font-weight: bold;
  text-transform: capitalize;
`;

export const AuthStatus = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <p>
      Welcome <Username>{user.name}</Username>!{" "}
      <Link to="/" onClick={handleSignOut}>
        Sign Out
      </Link>
    </p>
  );
};
