import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Lottery.css";

const Lottery = () => {
    let [ticket, setTicket] = useState([0, 0, 0]);

    function checkTicket() {
        if (ticket[0] + ticket[1] + ticket[2] == 15) {
            console.log("Matched");
            notify();
        } else {
            console.log("Not Matched");
        }
    }

    const notify = () => {
        toast.success("You win the lottery !", {
            position: "top-center",
        });
    };

    return (
        <div>
            <h4 style={{ margin: "10px" }}>Lottery Game</h4>
            <hr />
            <input type="number" min={0} max={9} value={ticket[0]} style={{ width: "25px", height: "25px" }} /> &nbsp;
            <input type="number" min={0} max={1} value={ticket[1]} style={{ width: "25px", height: "25px" }} /> &nbsp;
            <hr />
            <button onClick={generateTicket}>Generate Ticket</button>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Lottery;
