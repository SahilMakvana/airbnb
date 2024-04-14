import { useState } from "react";

const LudoBoard = () => {
    let [obj, setObj] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0,
    });

    let [arr, setArr] = useState(["No Moves"]);

    function blueInc() {
        arr.push("Blue Move");
        setArr([...arr]);

        // or

        setArr([...arr, "Blue Move"]);
    }

    return (
        <div>
            <p>{arr}</p>
            <p>Blue moves: {obj.blue}</p>
            <button onClick={blueInc} style={{ backgroundColor: "Blue" }}>
                +1
            </button>

            <p>Yellow moves: {obj.yellow}</p>
            <button style={{ backgroundColor: "Yellow", color: "Black" }}>+1</button>

            <p>Green moves: {obj.green}</p>
            <button style={{ backgroundColor: "Green" }}>+1</button>

            <p>Red moves: {obj.red}</p>
            <button style={{ backgroundColor: "Red" }}>+1</button>
        </div>
    );
};

export default LudoBoard;
