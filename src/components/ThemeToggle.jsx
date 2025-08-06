import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utills";
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storeTheme = localStorage.getItem("theme");
        if (storeTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);
    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme", "light");
            setIsDarkMode(false);
        }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded",
                "focus:outline-none"
            )}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
}
