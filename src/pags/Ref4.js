import React, {useRef, useEffect} from 'react';

const HandleRef4 = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`);
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username"/>
            <p/>
            <button onClick={login}>Login</button>
        </div>
    );
}
export default HandleRef4;
