import React, {useCallback, useState} from 'react';
import Box from "../component/Box";

const HandleCallBack2= () => {

    const [size, setSize] = useState(100);

    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        }
    }, [size]);


    return (
        <div style={{
            backgroundColor: isDark ? 'black' : 'white',
        }}>
            <input type="number" value={size} onChange={(event) => setSize(parseInt(event.target.value))}/>

            <button onClick={() => setIsDark(!isDark)}>Dark Mode</button>
            <Box createBoxStyle={createBoxStyle}/>
        </div>
    )
}
export default HandleCallBack2;