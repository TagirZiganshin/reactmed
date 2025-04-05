import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider.jsx";

import "./index.css";
// import App from './App.jsx'
import router from "./router.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContextProvider>
            <RouterProvider router={router}></RouterProvider>
        </ContextProvider>
    </StrictMode>
);
