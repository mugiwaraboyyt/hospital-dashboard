import { createContext, useContext } from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "system",
    setTheme: () => { },
});

export const useTheme = (): ThemeContextType => {
    return useContext(ThemeContext);
};