import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes"; // <-- Use routes
import "./index.css";
import { Toaster } from "sonner";
import {  HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <AppRoutes />
            <Toaster richColors position="top-right" />
        </HashRouter>
    </React.StrictMode>,
);
