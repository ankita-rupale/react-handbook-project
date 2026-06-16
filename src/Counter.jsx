//React hook ==> useState example basic counter app
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(15);

    const addValue = () => {
        setCounter(counter+1)
    }

    const removeValue = () => {
        setCounter(counter-1)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addValue}>Add value: {counter}</button>
            <button onClick={removeValue}>Remove value: {counter}</button>
        </div>
    );
}

export default Counter;