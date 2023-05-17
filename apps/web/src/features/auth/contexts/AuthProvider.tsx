import { ReactNode, useCallback, useEffect, useState } from "react";

import { User } from "@/services/api";
import { authService } from "@/features/auth/services";
import { AuthContext } from "./AuthContext";

export type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = authService.getUser();

    // Allows the previous logged in user to be remembered
    if (user) {
      setUser(user);
    }

    setLoading(false);
  }, []);

  const signIn = useCallback(async (userName: string) => {
    const user = await authService.signIn(userName);
    if (user) {
      setUser(user);
    }

    setLoading(false);

    return user;
  }, []);

  const signOut = useCallback(() => {
    authService.signOut();
    setUser(undefined);

    return Promise.resolve();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
