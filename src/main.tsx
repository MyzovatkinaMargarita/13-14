import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import "./styles/globals.css";

import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import App from "./App";
import "./styles/globals.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./styles/globals.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

