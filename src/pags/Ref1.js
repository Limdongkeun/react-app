import React, {useState, useRef} from 'react';

const HandleRef1 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);


    const increaseCountState = () => {
        setCount(count + 1);
    };

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log('countRef', countRef);
        console.log('countRef.current', countRef.current);
    };

    return (
      <div>
          <p>State : {count}</p>
          <p>Ref : {countRef.current}</p>
          <button onClick={increaseCountState}>State +1</button>
          <button onClick={increaseCountRef}>State +1</button>
      </div>
    );
}
export default HandleRef1;
