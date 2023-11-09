import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./globalStyles.tsx";
import { CompanyProvider } from "./context/ContextCompanies.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/ContextRegisteredusers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <CompanyProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CompanyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
