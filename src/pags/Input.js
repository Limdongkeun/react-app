import React, {useState} from 'react';

const Input = () => {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        console.log('event', event.target.value);
        setValue(event.target.value);
    }

    return (
        <div>
         <input type="text" value={value} onChange={onChange}/>
            <br/>
            <p>{value}</p>
        </div>
    )
}
export default Input;