import { useTheme } from "../store/theme";

export default function Title({
  count,
  title,
  noLine = false,
}: {
  count: number;
  title: string;
  noLine?: boolean;
}) {
  const { theme } = useTheme();
  return (
    <h1 className="text-2xl font-bold flex gap-2 items-center">
      {title} <span className="text-gray-500 text-sm">({count})</span>
      {!noLine && (
        <div
          className={`border-b w-full transition-colors ${
            theme === "dark" ? "border-gray-500" : "border-gray-300"
          }`}
        />
      )}
    </h1>
  );
}
