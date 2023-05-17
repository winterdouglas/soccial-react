import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { lightTheme, GlobalStyle } from "@/assets/styles";
import { AppRouter } from "@/routes/AppRouter";
import { AuthProvider } from "./features/auth";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
