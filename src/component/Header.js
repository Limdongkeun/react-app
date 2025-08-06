import React, {useContext} from 'react';
import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";

const Header = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <header className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightblue',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>useContext {user}!</h1>
        </header>
    )
}
export default Header;