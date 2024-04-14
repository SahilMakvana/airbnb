function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form was submitted");
}

const EventObject = () => {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name" />
            <button>Submit</button>
        </form>
    );
};

export default EventObject;
