import React from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((state)=>state.mode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
