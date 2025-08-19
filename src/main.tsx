import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes"; // <-- Use routes
import "./index.css";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes />
            <Toaster richColors position="top-right" />
        </BrowserRouter>
    </React.StrictMode>,
);
