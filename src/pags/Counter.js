import React, {useState} from 'react';

const Counter = () => {
    const [num, setNum] = useState(0);


    const onIncrease = () => {
        setNum(num + 1);
    }

    const onDecrease = () => {
        setNum(num - 1);
    }

    return (
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}
export default Counter;