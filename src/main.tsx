import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

import App from "./App.tsx";
import SignInPage from "./pages/sign-in.tsx";
import SignUpPage from "./pages/sign-up.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/sign-up" element={<SignInPage />}></Route>
                    <Route path="/sign-in" element={<SignUpPage />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
