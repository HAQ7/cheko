import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./features/home";
import MapPage from "./features/map";
import MenuPage from "./features/menu";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./store/theme";
import { SearchProvider } from "./store/search";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SearchProvider>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/map" element={<MapPage />} />
                            <Route
                                path="/menu/:menuId"
                                element={<MenuPage />}
                            />
                        </Route>
                    </Routes>
                </SearchProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
