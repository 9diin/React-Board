import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

import App from "./App.tsx"; // 메인 페이지
import SignInPage from "./pages/sign-in.tsx"; // 로그인 페이지
import SignUpPage from "./pages/sign-up.tsx"; // 회원가입 페이지
import NewTopicPage from "./pages/topics/new-topic.tsx"; // 토픽 작성 페이지

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/sign-up" element={<SignUpPage />}></Route>
                    <Route path="/sign-in" element={<SignInPage />}></Route>
                    <Route path="/topics/new-topic" element={<NewTopicPage />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
