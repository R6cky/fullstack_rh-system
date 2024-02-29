import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./globalStyles.tsx";
import { CompanyProvider } from "./context/ContextCompanies.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/ContextUsers.tsx";
import { ModalProvider } from "./context/ContextModals.tsx";
import { AuthProvider } from "./context/ContextAuth.tsx";
import { ToastProvider } from "./context/ContextToastify.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ToastProvider>
        <AuthProvider>
          <CompanyProvider>
            <UserProvider>
              <ModalProvider>
                <App />
              </ModalProvider>
            </UserProvider>
          </CompanyProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
