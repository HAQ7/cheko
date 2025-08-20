import { NavLink } from "react-router";
import ThemeToggle from "./theme-toggle";
import headerImage from "../../assets/header.png"

export default function Header() {
    return (
        <header className="w-full h-36 flex relative">
            <div className="absolute w-full h-full flex">
                <div className="bg-dark-primary h-full flex-1 rounded-br-[4rem]">
                    <img src={headerImage} alt="Logo" className="absolute object-cover w-full h-full opacity-5 blur-md" />
                    <nav className="z-10 relative">
                        <ul className="flex sm:ms-24 gap-6">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-primary px-4 pt-4 pb-3 grid rounded-b-lg place-items-center text-black"
                                            : "px-4 pt-4 pb-3 grid rounded-b-lg place-items-center text-white"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/map"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-primary px-4 pt-4 pb-3 grid rounded-b-lg place-items-center text-black"
                                            : "px-4 pt-4 pb-3 grid rounded-b-lg place-items-center text-white"
                                    }
                                >
                                    Map
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="h-full w-24">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
