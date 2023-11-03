import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./globalStyles.tsx";
import { CompanyProvider } from "./context/ContextCompanies.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <CompanyProvider>
        <App />
      </CompanyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
