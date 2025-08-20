import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./features/home";
import Map from "./features/map";
import Menu from "./features/menu";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./store/theme";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/:menu" element={<Menu />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
