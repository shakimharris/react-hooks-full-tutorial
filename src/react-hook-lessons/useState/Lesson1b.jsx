import React, { useState } from 'react';

function StateTutorial () {
    const [inputValue, setInputValue] = useState("Pedro");
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
        return (
            <div className="input-tag">
                <input type="text"
                       onChange={onChange}
                       />
                       {inputValue}
            </div>
        )
    }


export default StateTutorial;