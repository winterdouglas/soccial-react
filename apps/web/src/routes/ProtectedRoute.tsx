import { ComponentType } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "@/features/auth";

export type ProtectedRouteProps = {
  Component: ComponentType;
};

export const ProtectedRoute = ({ Component }: ProtectedRouteProps) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Component />;
};
