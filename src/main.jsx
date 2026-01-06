import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme.jsx";
import ProductProvider from "./components/productcontext/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
