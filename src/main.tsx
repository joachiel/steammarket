import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

if (typeof window !== "undefined") {
  const redirect = localStorage.getItem("redirect");
  if (redirect) {
    localStorage.removeItem("redirect");
    if (redirect !== window.location.pathname) {
      // Use history API to avoid page reload
      window.history.replaceState(null, "", redirect);
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
