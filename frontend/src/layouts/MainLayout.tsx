import { Outlet } from "react-router";
import Header from "../components/header";
import { useTheme } from "../store/theme";

export default function MainLayout() {

  const { theme } = useTheme();

    return (
        <div className={`font-inter min-h-screen transition-colors ${theme === 'dark' ? 'bg-dark-primary text-white' : 'bg-white text-black'}`}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
