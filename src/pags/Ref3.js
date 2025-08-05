import React, {useState, useRef, useEffect} from 'react';

const HandleRef3 = () => {
    const [count, setCount] = useState(1);
    const renderRef = useRef(0);

    useEffect(() => {
        renderRef.current = renderRef.current + 1;
        console.log('renderRef', renderRef);
        console.log('renderRef.current', renderRef.current);
    })

    return (
      <div>
        <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Count +1</button>
      </div>
    );
}
export default HandleRef3;
