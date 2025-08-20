import { useTheme } from "../store/theme";

export default function Card({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "bg-cheko-dark-secondary" : "bg-white"} shadow-lg rounded-lg p-4 transition-colors`}>
      {children}
    </div>
  );
}
