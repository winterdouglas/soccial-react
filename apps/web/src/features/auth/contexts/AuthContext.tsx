import { createContext } from "react";

import { User } from "@/services/api";

export type AuthContextType = {
  loading: boolean;
  user?: User;
  signIn: (user: string) => Promise<User | undefined>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
