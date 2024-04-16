import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Lottery.css";

const Lottery = () => {
    let [ticket, setTicket] = useState([0, 0, 0]);

    function generateTicket() {
        ticket.splice(0, ticket.length);
        setTicket([...ticket]);
        ticket.push(Math.floor(Math.random() * 10));
        ticket.push(Math.floor(Math.random() * 10));
        ticket.push(Math.floor(Math.random() * 10));
        setTicket([...ticket]);

        checkTicket();
    }

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
};

export default Lottery;
