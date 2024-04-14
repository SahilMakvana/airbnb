import { useState } from "react";

const Slate = () => {
    let [state, setState] = useState({ x: 0, y: 0 });

    function drowCircle(e) {
        console.log(e.pageX + " " + e.pageY);
        console.log(e);
    }

    return (
        <div>
            <canvas onMouseMove={drowCircle} style={{ width: "700px", height: "700px", backgroundColor: "#aaaaaa" }}></canvas>
        </div>
    );
};

export default Slate;
