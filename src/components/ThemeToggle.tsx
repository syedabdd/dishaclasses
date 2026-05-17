// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "./ThemeProvider";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <div className="w-9 h-9" />;
//   }

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--card-border)] hover:text-[var(--fg-color)] transition-colors focus:outline-none"
//       aria-label="Toggle theme"
//     >
//       {theme === "dark" ? (
//         <Sun className="w-5 h-5" />
//       ) : (
//         <Moon className="w-5 h-5" />
//       )}
//     </button>
//   );
// }
