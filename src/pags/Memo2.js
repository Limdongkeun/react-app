import React, {useEffect, useMemo, useState} from "react";

const HandleMemo2 = (factory, deps) => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // const location = isKorea ? 'Korea' : 'USA';
    // const location = {
    //     country: isKorea ? 'Korea' : 'USA',
    // }

    const location = useMemo(() =>{
        return {
            country: isKorea ? 'Korea' : 'USA',
        }
    },[isKorea])

    useEffect(() => {
        console.log('location', location);
    }, [location])

    return (
        <div>
            <h3>하루에 몇끼 먹어요?</h3>
            <input type="number"
                   value={number}
                   onChange={(event) => setNumber(parseInt(event.target.value))}
            />
            <hr/>
            <h3>어느 나라에 있어요?</h3>
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>

    );
};
export default HandleMemo2;