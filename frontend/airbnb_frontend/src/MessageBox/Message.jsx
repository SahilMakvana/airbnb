import "./Message.css";

export const Message = ({ name, color }) => {
    let BGcolor = { backgroundColor: color };
    return (
        <div className="Message" style={BGcolor}>
            <h3>Hello {name}</h3>
        </div>
    );
};

export default Message;
