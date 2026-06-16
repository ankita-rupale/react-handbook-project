//React hook ==> useState example basic counter app
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(15);

    const addValue = () => {
        // setCounter(counter+1)
        counter < 20 ? setCounter(counter + 1) : counter;
    }

    const removeValue = () => {
        // setCounter(counter-1)
       counter > 0 ? setCounter(counter - 1) : counter;
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addValue} disabled={counter >= 20}>Add value: {counter}</button>
            <button onClick={removeValue} disabled={counter <= 0}>Remove value: {counter}</button>
        </div>
    );
}

export default Counter;