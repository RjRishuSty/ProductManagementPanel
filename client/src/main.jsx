import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </StrictMode>
);
