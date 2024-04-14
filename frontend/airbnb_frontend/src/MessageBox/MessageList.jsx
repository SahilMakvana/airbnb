import Message from "./Message.jsx";
const MessageList = () => {
    return (
        <div>
            <Message name="John" color="Green" />
            <Message name="Peter" color="Yellow" />
            <Message name="Tony" color="Orange" />
            <Message name="Smith" color="palegreen" />
            <Message name="Mikal" color="darkturquoise" />
        </div>
    );
};

export default MessageList;
