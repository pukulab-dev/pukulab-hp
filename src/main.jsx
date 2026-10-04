import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// These pages use query parameters to initialize their form state. The static
// HTML has no query context, so mount instead of hydrating that different tree.
const queryInitializedPage = window.location.search &&
  ["/contact", "/entsumugi/estimate"].includes(window.location.pathname.replace(/\/$/, ""));

if (rootElement.hasChildNodes() && !queryInitializedPage) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}