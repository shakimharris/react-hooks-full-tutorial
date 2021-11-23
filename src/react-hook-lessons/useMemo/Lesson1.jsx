import React , { useState, useMemo } from 'react'; 

const thisFunctionWillSlowDownOurApp = (num1, num2) => {
    for(let i=0; i < 10000; i++){
        return num1 + num2;
    }
    console.log("This probably took a while");
}

export default function MemoExample(){
    const [numToAdd, setNumToAdd] = useState(0);
    const [num2, setNum2] = useState(0);

    const addedValue = useMemo(() => {
        return thisFunctionWillSlowDownOurApp(numToAdd, num2);
        }, [numToAdd, num2]);
    return (
        <div className="App">
            <input type="number" 
            value={numToAdd}
            onChange={(e) => setNumToAdd(e.target.value)} />
            <input type="number" 
            value={num2}
            onChange={(e => setNum2(e.target.value))} />
         <div>{addedValue}</div>
        </div>
    )
}

