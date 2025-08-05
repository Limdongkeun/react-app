import React, {useEffect, useState} from "react";
import Timer from "../component/Timer";

const HandleEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');


    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChande = (event) => {
        setName(event.target.value);
    };
    /*
    렌더링 될 때 마다 매번 실행
    mounted + [item] 변화 할 때 실행
    []가 비워져 있으면 처음 마운트 될 때만 실행
    */
    useEffect(() => {
        console.log('count 변화 렌더링');
    }, [count]);

    useEffect(() => {
        console.log('name 변화 렌더링');
    }, [name]);

    const [showTimer, setShowTimer] = useState(false);


    return (
        <div>
            <p/>
            <button onClick={handleCountUpdate}>Count_Update</button>
            <p>count : {count}</p>
            <p/>
            <input type="text" value={name} onChange={handleInputChande}/> <p/>
            <span>name : {name}</span>
            <br/>
            <br/>
            {showTimer && <Timer/>}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
}
export default HandleEffect;