import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./globalStyles.tsx";
import { CompanyProvider } from "./context/ContextCompanies.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/ContextUsers.tsx";
import { ModalProvider } from "./context/ContextModals.tsx";
import { AuthProvider } from "./context/ContextAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <ModalProvider>
          <CompanyProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </CompanyProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
