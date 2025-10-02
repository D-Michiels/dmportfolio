import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, SetISDarkMode] = useState(false);

    return <button> {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300"/>)
         : (<Moon />)}</button>;
};