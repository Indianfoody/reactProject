import { useEffect, useState } from "react";
const DarkModeToggle = () =>{
    const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add("dark-mode");
        }
        else{
            document.body.classList.remove("dark-mode");
        }
    },[darkMode]);
return (
<button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "Light" : "Dark"}
</button>
);
};
export default DarkModeToggle;