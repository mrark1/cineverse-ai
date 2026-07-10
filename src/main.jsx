import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./context/FavoritesContext"; 
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
  <ThemeProvider>
    <FavoritesProvider>
      <>
    <App />

    <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
            duration: 2500,
            style: {
                background: "#111827",
                color: "#fff",
                borderRadius: "10px",
                border: "1px solid #2563EB"
            }
        }}
    />
</>
    </FavoritesProvider>
  </ThemeProvider>
</BrowserRouter>
  </React.StrictMode>
);