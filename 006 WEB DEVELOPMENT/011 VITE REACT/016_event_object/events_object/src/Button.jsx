
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted successfully");
}

function Button() {
    return(
       <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write Something" />
            <button type="submit">Submit</button>
            {/*<button>Submit</button>*/}
       </form>
    );
}

export default Button