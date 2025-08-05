import React, { useState } from "react";

const heavyWork = () => {
   return ["홍길", "김민"];
}

const HandleState = () => {
    const [time, setTime] = useState(1);
    const [names, setNames] = useState(() => {
        return heavyWork();
    })
    const [input, setInput] = useState("");

    const onTimeUpate = (event) => {
        // setTime(Number(event.target.value) + 1);

        let newTime;

        if(time === 23) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleUpload = () => {

        if(input === "") {
            alert('이름을 입력해라~~~');
            return;
        }

        // setNames([...names, input]);
        setNames((prevState) => {return [input, ...prevState]})
        setInput("");
    }

    return (
        <div>
            <span>현재 시각은 : {time}시 </span>
            <p/>
            <div>
                <button value={time} onClick={onTimeUpate}>버튼</button>
            </div>

            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div>
                <input type="text" value={input} onChange={handleInputChange}/>
                <button onClick={handleUpload}>Upload</button>
                {names.map((name, index) => <p>{index} {name}</p>)}
            </div>
        </div>

    );
}

export default HandleState;