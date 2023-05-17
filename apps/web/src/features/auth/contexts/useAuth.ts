import { useContext } from "react";

import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within the AuthContext, please check your configuration"
    );
  }

  return context;
};
