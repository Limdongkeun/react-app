import React, {useCallback, useEffect, useState} from 'react';

const HandleCallBack = () => {
    const [num, setNum] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log(`someFunction : ${num}`);

    },[num]);


    useEffect(() => {
        console.log(`useEffect : ${num}`);
    }, [someFunction])

    return (
        <div>
            <input type="number" value={num} onChange={(event) => setNum(parseInt(event.target.value))}/>
            <br/>
            <br/>
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <button onClick={someFunction}>Click</button>
        </div>
    );
}
export default HandleCallBack;