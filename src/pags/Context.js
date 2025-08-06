import React, {useState} from 'react';
import Page from "../component/Page";
import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";

const HandleContext = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={"사용자"}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </ThemeContext.Provider>
        </UserContext.Provider>
    )
}
export default HandleContext;