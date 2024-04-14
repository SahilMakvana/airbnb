function handleClick() {
    console.log("Hello!!");
}

function handelMouseOver() {
    console.log("Buy!!");
}

function handleDblClick() {
    console.log("You Double Clicked!!");
}

const Button = () => {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handelMouseOver}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, doloremque consequuntur quisquam dolore impedit autem obcaecati ipsa minus minima, labore expedita dolores! Ea
                quae nihil deserunt, doloremque adipisci consectetur!
            </p>
            <button onDoubleClick={handleDblClick}>Double Clicked Me!</button>
        </div>
    );
};

export default Button;
