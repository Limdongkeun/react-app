import React, {useState} from 'react';

const Input2 = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        tel: ''
    })

    const onChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;
        setInputs({
            ...inputs, // ... 은 깊은 복사 자바 스크립트에서는 배열이나 객체는 참조 값만 가지고 있기 때문에 새로운 객체를 만든다
            [id]: value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={inputs.name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={inputs.email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={inputs.tel} onChange={onChange}/>
            </div>
            <p>Name : {inputs.name}</p>
            <p>Email : {inputs.email}</p>
            <p>tel : {inputs.tel}</p>

        </div>
    )
}
export default Input2;