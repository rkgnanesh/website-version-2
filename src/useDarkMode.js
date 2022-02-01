import { useState } from "react";

export const useDarkMode = () => {
    
    const [theme, setTheme] = useState(localStorage.getItem("mode") || false);

    const toggleMode = () => {
        // console.log(theme)
        setTheme((s)=>!s)
        localStorage.setItem("mode", theme)
        // theme === false ? setTheme(!theme) : setTheme(theme);
    }

    return [theme, toggleMode]
}
