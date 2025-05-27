
import { ThemeContext, type Theme } from "@/contexts/useTheme";
import React, { useState, useEffect } from "react";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
};

export function ThemeProvider({
    children,
    defaultTheme = "system",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme") as Theme | null;
            return saved ?? defaultTheme;
        }
        return defaultTheme;
    });

    useEffect(() => {
        const root = document.documentElement;
        const systemDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (theme === "system") {
            root.classList.toggle("dark", systemDark);
            localStorage.removeItem("theme");
        } else {
            root.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}