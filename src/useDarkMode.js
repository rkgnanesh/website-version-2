import { useState } from "react";

export const useDarkMode = () => {
    
    const [theme, setTheme] = useState(localStorage.getItem("mode") || false);

    const toggleMode = () => {
        
        setTheme((s)=>!s)
console.log(theme);
console.log("test");
        localStorage.setItem("mode", theme)
        // theme === false ? setTheme(!theme) : setTheme(theme);
    }

    return [theme, toggleMode]
}
