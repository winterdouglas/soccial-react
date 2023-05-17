import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Dashboard } from "@/routes/Dashboard";
import { Login } from "@/routes/Login";
import { Main } from "@/layouts/Main";
import { ProtectedRoute } from "@/routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute Component={Dashboard} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {},
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
