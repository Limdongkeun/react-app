import React, {useContext} from 'react';
import {ThemeContext} from "../context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const toggleDark = () => {
        setIsDark(!isDark);
    };
    return (
        <footer className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'lightblue',
            }}
        >
            <button onClick={toggleDark}>Dark Mode</button>
        </footer>
    )
}
export default Footer;