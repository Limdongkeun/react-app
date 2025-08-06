import React, {useMemo, useState} from "react";

const HandleMemo = () => {


    const hardCalcualte = (num) => {
        for (let i = 0; i < 1000000000; i++) {}
            return num + 10000;
    };

    const easyCalcualte = (num) => {
            return num + 1;
    };

    const [hardNum, setHardNum] = useState(1);
    // const hardSum = hardCalcualte(hardNum);
    const hardSum = useMemo(() => {
        return hardCalcualte(hardNum);
    }, [hardNum])

    const [easyNum, setEasyNum] = useState(1);
    const easySum = easyCalcualte(easyNum);

    return (
      <div>
          <h3>어려운 계산</h3>
          <input type="number" value={hardNum} onChange={(event) => setHardNum(parseInt(event.target.value))} />

          <span> + 10000 = {hardSum}</span>
          <p/>
          <h3>쉬운 계산</h3>
          <input type="number" value={easyNum} onChange={(event) => setEasyNum(parseInt(event.target.value))} />

          <span> + 1 = {easySum}</span>
      </div>
    );
};
export default HandleMemo;