import React, { FunctionComponent, useState } from 'react';

const InputForm: FunctionComponent = () => {
    const [email, setEmail] = useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    return (
        <div className="inputForm">
            <input type="text" placeholder="Email" onChange={onChange} />
            <h1>My email is {email}</h1>
        </div>
    )
}

export default InputForm;