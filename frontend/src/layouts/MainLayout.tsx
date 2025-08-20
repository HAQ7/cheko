import { Outlet } from "react-router";
import Header from "../components/header";
import { useTheme } from "../store/theme";

export default function MainLayout() {

  const { theme } = useTheme();

    return (
        <div className={`font-inter min-h-screen transition-colors ${theme === 'dark' ? 'bg-cheko-dark-primary text-white' : 'bg-white text-black'}`}>
            <Header />
            <main className="sm:mt-18 md:mt-12 mt-48 md:px-28 px-4">
                <Outlet />
            </main>
        </div>
    );
}
