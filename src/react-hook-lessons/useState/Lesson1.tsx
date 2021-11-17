import React, { useState } from "react";
import './Lesson1.css';

function LessonOne (){
    const [count, setCount] = useState(0);

    return (
       <div className="counter">
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count-count)}>Reset</button>
     <h1>You clicked me {count} times!;</h1>
    </div>
    );
}

export default LessonOne;