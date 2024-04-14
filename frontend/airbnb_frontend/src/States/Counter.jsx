import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    function incCount() {
        setCount(25);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
};

export default Counter;
