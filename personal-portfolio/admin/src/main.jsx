import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingContext.jsx";
import { ProjectProvider } from "./context/ProjectContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>
);
