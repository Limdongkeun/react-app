import React, {useState, useRef} from 'react';

const HandleRef2 = () => {
    const [render, setRender] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const doRendering = () => {
        setRender(render + 1);
    }

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
    }
    const increaseVar = () => {
        countVar = countVar + 1;
    }

    const printResult = () => {
        console.log('countRef', countRef);
        console.log('countVar', countVar);
    }

    return (
      <div>
          <p>Ref : {countRef.current}</p>
          <p>Var : {countVar}</p>
          <button onClick={doRendering}>렌더!</button>
          <button onClick={increaseRef}>Ref 올려</button>
          <button onClick={increaseVar}>Var 올려</button>
          <button onClick={printResult}>console</button>
      </div>
    );
}
export default HandleRef2;
