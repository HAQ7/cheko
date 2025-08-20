import { useTheme } from "../../store/theme";
import { SunIcon, MoonIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    // Toggle position: up (light) or down (dark)
    const isLight = theme === "light";

    return (
        <div className="flex flex-col items-center justify-center h-full select-none">
            
            {/* Sun Icon (top, outside knob) */}
            <div className="flex justify-center items-center h-8 mb-1">
                <SunIcon className={`w-6 h-6 transition-colors ${isLight ? 'text-black' : 'text-white'}`} />
            </div>

            <motion.div
                className={`relative w-8 h-12 transition-colors ${isLight ? 'bg-dark-secondary' : 'bg-gray-800'} rounded-full shadow-inner flex flex-col items-center cursor-pointer`}
                onClick={toggleTheme}
                initial={false}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
                {/* Toggle Knob */}
                <motion.div
                    className={`absolute w-5 h-5 rounded-full transition-colors bg-primary shadow-md`}
                    layout
                    initial={false}
                    animate={{ top: isLight ? 4 : 24 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
            </motion.div>

            {/* Moon Icon (bottom, outside knob) */}
            <div className="flex justify-center items-center h-8 mt-1">
                <MoonIcon className={`w-6 h-6 transition-colors ${isLight ? 'text-black' : 'text-white'}`} />
            </div>
        </div>
    );
}
